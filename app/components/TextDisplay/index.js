/**
 *
 * TextDisplay
 *
 */

import React from 'react';
import RelativeText from 'components/RelativeText';
import withRelativeCoords from 'components/withRelativeCoords';
import { Container } from '@inlet/react-pixi';
import TextDisplayBackground from 'components/TextDisplayBackground';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class TextDisplay extends React.Component {
  render() {
    const { origWidth, origHeight, wide, tall, text, textWidth } = this.props;
    const textStyle = new PIXI.TextStyle({
      align: 'left',
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
          width={origWidth}
          height={origHeight}
          xPos={3}
          yPos={3}
          wide={textWidth || wide - 6}
          tall={tall - 6}
          style={textStyle}
          text={text}
        />
      </Container>
    );
  }
}

export default withRelativeCoords(TextDisplay);
