/**
 *
 * TextDisplay
 *
 */

import React from 'react';
import RelativeRectangle from 'components/RelativeRectangle'
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class TextDisplay extends React.Component {
  render() {
    const { width, height } = this.props;
    return (
      <React.Fragment>
        <RelativeRectangle
          width={width}
          height={height}
          xPos={0}
          yPos={46.5}
          wide={80}
          tall={25.5}
          fill={0xffffff}
        />
      </React.Fragment>
    );
  }
}

export default TextDisplay;
