/**
 *
 * Layout
 *
 */

import React from 'react';
import { Text } from '@inlet/react-pixi';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class GameLayout extends React.Component {
  style = new PIXI.TextStyle({
    fontFamily: 'PokemonGB',
    fontSize: 36,
    wordWrap: true,
    wordWrapWidth: 440,
  });

  render() {
    const { width, height } = this.props;

    return (
      <Text
        style={this.style}
        x={width / 2}
        y={height / 2}
        text="Rich text with a lot of options and across multiple lines"
      />
    );
  }
}

GameLayout.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default GameLayout;
