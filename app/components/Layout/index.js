/**
 *
 * Layout
 *
 */

import React from 'react';
import { Text } from '@inlet/react-pixi';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Layout extends React.Component {
  style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    wordWrap: true,
    wordWrapWidth: 440,
  });

  render() {
    return (
      <Text
        style={this.style}
        x={30}
        y={180}
        text="Rich text with a lot of options and across multiple lines"
      />
    );
  }
}

Layout.propTypes = {};

export default Layout;
