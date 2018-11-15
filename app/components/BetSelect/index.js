/**
 *
 * BetSelect
 *
 */

import React from 'react';
import RelativeText from 'components/RelativeText';
import RelativeSprite from 'components/RelativeSprite';
import withRelativeCoords from 'components/withRelativeCoords';
import { Container } from '@inlet/react-pixi';
import TextDisplayBackground from 'components/TextDisplayBackground';

/* eslint-disable react/prefer-stateless-function */
class BetSelect extends React.Component {
  render() {
    const {
      origWidth,
      origHeight,
      wide,
      tall,
      bet,
      updateBet,
      beginPlaying,
    } = this.props;
    const textStyle = new PIXI.TextStyle({
      align: 'right',
      fontFamily: 'PokemonGB',
      fill: '#000000',
      fontSize: origHeight / 2,
      wordWrap: false,
      wordWrapWidth: origWidth,
    });
    return (
      <Container {...this.props}>
        <TextDisplayBackground
          {...this.props}
          width={origWidth}
          height={origHeight}
        />

        <RelativeText
          {...this.props}
          interactive
          width={origWidth}
          height={origHeight}
          xPos={(wide / 4) * 3 - 3}
          yPos={6}
          wide={tall / 8}
          tall={tall / 3}
          style={textStyle}
          text="3"
          pointerdown={() => {
            updateBet(3);
            beginPlaying();
          }}
        />

        {bet === 3 && (
          <RelativeSprite
            {...this.props}
            xPos={wide / 2}
            anchor={[0, 0]}
            yPos={tall / 4 + 6}
            wide={tall / 3}
            tall={tall / 3}
            image="./arrow.png"
          />
        )}

        <RelativeText
          {...this.props}
          interactive
          width={origWidth}
          height={origHeight}
          xPos={(wide / 4) * 3 - 3}
          yPos={tall / 4 + 6}
          wide={tall / 8}
          tall={tall / 4}
          style={textStyle}
          text="2"
          pointerdown={() => {
            updateBet(2);
            beginPlaying();
          }}
        />

        {bet === 2 && (
          <RelativeSprite
            {...this.props}
            xPos={wide / 2}
            anchor={[0, 0]}
            yPos={(tall / 3) * 2 + 3}
            wide={tall / 3}
            tall={tall / 3}
            image="./arrow.png"
          />
        )}

        <RelativeText
          {...this.props}
          interactive
          width={origWidth}
          height={origHeight}
          xPos={(wide / 4) * 3 - 3}
          yPos={tall / 2 + 3}
          wide={tall / 8}
          tall={tall / 4}
          style={textStyle}
          text="1"
          pointerdown={() => {
            updateBet(1);
            beginPlaying();
          }}
        />

        {bet === 1 && (
          <RelativeSprite
            {...this.props}
            interactive
            xPos={wide / 2}
            anchor={[0, 0]}
            yPos={tall + 3}
            wide={tall / 3}
            tall={tall / 3}
            image="./arrow.png"
          />
        )}
      </Container>
    );
  }
}

export default withRelativeCoords(BetSelect);
