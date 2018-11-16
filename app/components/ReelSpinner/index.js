/**
 *
 * ReelSpinner
 *
 */

import React from 'react';
import { Graphics, Container } from '@inlet/react-pixi';
import RelativeContainer from 'components/RelativeContainer';
import RelativeRectangle from 'components/RelativeRectangle';
import RelativeSprite from 'components/RelativeSprite';
import withRelativeCoords from 'components/withRelativeCoords';

/* eslint-disable react/prefer-stateless-functio
n */
class ReelSpinner extends React.Component {
  state = {
    curIndex: 0,
    reelSpeed: 1.5,
    reelOffset: 0,
  };

  masker = React.createRef();

  componentDidMount() {
    this.props.app.ticker.add(this.tick);
  }

  componentWillUnmount() {
    this.props.app.ticker.remove(this.tick);
  }

  tick = delta => {
    const {
      wide,
      distribution,
      spinning,
      target,
      updateValue,
      reelIndex,
      value: realValue,
      reelStopped,
    } = this.props;
    const { reelSpeed, reelOffset, curIndex } = this.state;
    if (spinning || target !== realValue) {
      const increase = wide * 0.1 * delta * reelSpeed;
      if (reelOffset + increase > wide) {
        const value = curIndex === 0 ? distribution.size - 1 : curIndex - 1;
        updateValue(reelIndex, value);
        if (value === target) {
          reelStopped();
        }
        this.setState({
          reelOffset: 0,
          curIndex: value,
        });
      } else {
        this.setState({
          reelOffset: reelOffset + increase,
        });
      }
    } else if (!spinning && target === realValue && reelOffset > 0) {
      this.setState({
        reelOffset: 0,
      });
      reelStopped();
    }
  };

  getSymbolSprite = index => {
    const { symbols, distribution } = this.props;
    let i = index;
    if (i >= distribution.size) {
      i -= distribution.size;
    } else if (i < 0) {
      i += distribution.size;
    }
    return symbols.get(distribution.get(i)).get('icon');
  };

  renderMask = (x, y, width, height) => {
    const rect = new PIXI.Graphics();
    rect.clear();
    rect.beginFill();
    rect.drawRect(x, y, width, height);
    rect.endFill();
    return rect;
  };

  render() {
    const margin = 0.5;
    const { curIndex, reelOffset } = this.state;
    const {
      origWidth,
      origHeight,
      x,
      y,
      width,
      height,
      xPos,
      yPos,
      wide,
      tall,
    } = this.props;

    return (
      <React.Fragment>
        <Container {...this.props}>
          <RelativeSprite
            width={origWidth}
            height={origHeight}
            wide={wide - margin}
            tall={wide - margin}
            anchor={[0, 0]}
            xPos={margin / 2}
            yPos={margin / 2 - wide + reelOffset}
            mask={this.masker.current}
            image={this.getSymbolSprite(curIndex - 2)}
          />
          <RelativeSprite
            width={origWidth}
            height={origHeight}
            wide={wide - margin}
            tall={wide - margin}
            xPos={margin / 2}
            yPos={margin / 2 + reelOffset}
            mask={this.masker.current}
            image={this.getSymbolSprite(curIndex - 1)}
          />
          <RelativeSprite
            width={origWidth}
            height={origHeight}
            wide={wide - margin}
            tall={wide - margin}
            xPos={margin / 2}
            yPos={margin + wide + reelOffset}
            mask={this.masker.current}
            image={this.getSymbolSprite(curIndex)}
          />
          <RelativeSprite
            width={origWidth}
            height={origHeight}
            wide={wide - margin}
            tall={wide - margin}
            xPos={margin / 2}
            yPos={margin + wide * 2 + reelOffset}
            mask={this.masker.current}
            image={this.getSymbolSprite(curIndex + 1)}
          />
          <Graphics
            x={0}
            y={0}
            ref={this.masker}
            draw={rect => {
              rect.clear();
              rect.beginFill(0x000000);
              rect.drawRect(0, 0, width, height);
              rect.endFill();
            }}
          />
        </Container>
      </React.Fragment>
    );
  }
}

ReelSpinner.propTypes = {};

export default withRelativeCoords(ReelSpinner);
