/**
 *
 * WithRelativePos
 *
 */

import React from 'react';

// This allows us to use relative coords, based on a 80/72

const calcX = (x, width) => (x / 80) * width;
const calcY = (y, height) => (y / 72) * height;

const withRelativeCoords = WrappedComponent => {
  class WithRelativeCoords extends React.Component {
    render() {
      const {
        xPos,
        yPos,
        width,
        wide,
        tall,
        height,
        xOffset,
        yOffset,
      } = this.props;
      return (
        <WrappedComponent
          {...this.props}
          x={calcX(xPos + (xOffset || 0), width)}
          y={calcY(yPos + (yOffset || 0), height)}
          width={calcX(wide, width)}
          height={calcY(tall, height)}
          origWidth={width}
          origHeight={height}
        />
      );
    }
  }
  return WithRelativeCoords;
};

export default withRelativeCoords;
