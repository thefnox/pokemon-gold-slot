/**
 *
 * Golem
 *
 */

import React from 'react';
import RelativeSprite from 'components/RelativeSprite';

/* eslint-disable react/prefer-stateless-function */
class Golem extends React.Component {
  state = {
    xOffset: 0,
    yOffset: 0,
    rotation: 0,
  };

  tick = delta => {
    const { golemMode } = this.props;
    const { xOffset, yOffset, rotation } = this.state;
    const newRotation = rotation + delta * 0.1;
    let newYOffset = 0;
    let newXOffset = 0;
    if (golemMode) {
      newYOffset = Math.min(yOffset + delta * 6, 46);
      if (newYOffset >= 46) {
        newXOffset = xOffset + delta * 1;
      }
    }
    this.setState({
      rotation: newRotation,
      yOffset: newYOffset,
      xOffset: newXOffset,
    });
  };

  componentDidMount() {
    this.props.app.ticker.add(this.tick);
  }

  componentWillUnmount() {
    this.props.app.ticker.remove(this.tick);
  }

  snapRotation = rotation => {
    const clamped = Math.round(rotation % 4) * 90;
    return clamped * (Math.PI / 180);
  };

  render() {
    const { width, height } = this.props;
    const { xOffset, yOffset, rotation } = this.state;
    return (
      <RelativeSprite
        width={width}
        height={height}
        xPos={46 + xOffset}
        yPos={-6 + yOffset}
        wide={12}
        tall={12}
        anchor={[0.5, 0.5]}
        rotation={this.snapRotation(rotation)}
        image="/golem.png"
        xOffset={0}
        yOffset={0}
      />
    );
  }
}

export default Golem;
