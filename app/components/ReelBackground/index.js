/**
 *
 * ReelBackground
 *
 */

import React from 'react';
import RelativeRectangle from 'components/RelativeRectangle';
import withRelativeCoords from 'components/withRelativeCoords';

/* eslint-disable react/prefer-stateless-function */
class ReelBackground extends React.Component {
  render() {
    const { origWidth, origHeight, xPos, yPos, wide, tall } = this.props;
    return (
      <React.Fragment>
        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={1.5}
          tall={tall - 0.5}
          xPos={xPos}
          yPos={yPos + 0.5}
          fill={0xc0c8e0}
        />
        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={wide - 1}
          tall={tall - 1}
          xPos={xPos}
          yPos={yPos + 0.5}
          fill={0xc0c8e0}
        />
        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={tall - 1}
          xPos={xPos}
          yPos={yPos + 0.5}
          fill={0x000000}
        />
        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={tall}
          xPos={xPos + 1}
          yPos={yPos + 0.5}
          fill={0x000000}
        />
        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={tall}
          xPos={xPos + wide - 1.5}
          yPos={yPos + 0.5}
          fill={0x000000}
        />
        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={tall - 1}
          xPos={xPos + wide - 0.5}
          yPos={yPos + 0.5}
          fill={0x000000}
        />
      </React.Fragment>
    );
  }
}

export default withRelativeCoords(ReelBackground);
