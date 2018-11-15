/**
 *
 * Reel
 *
 */

import React from 'react';
import Rectangle from 'components/Rectangle';
import RelativeRectangle from 'components/RelativeRectangle';
import ReelBackground from 'components/ReelBackground';
import ReelSpinner from 'components/ReelSpinner';
import withRelativeCoords from 'components/withRelativeCoords';

/* eslint-disable react/prefer-stateless-function */
class Reel extends React.Component {
  render() {
    const { wide, tall, xPos, yPos } = this.props;
    return (
      <React.Fragment>
        <ReelBackground
          {...this.props}
          wide={wide / 4}
          tall={tall}
          xPos={xPos}
          yPos={yPos}
        />
        <ReelBackground
          {...this.props}
          wide={wide / 4}
          tall={tall}
          xPos={xPos + wide * 0.75}
          yPos={yPos}
        />
        <RelativeRectangle
          {...this.props}
          wide={wide / 2}
          tall={tall}
          xPos={xPos + wide / 4}
          yPos={yPos}
          fill={0xffffff}
        />
        <RelativeRectangle
          {...this.props}
          wide={wide / 2}
          tall={0.5}
          xPos={xPos + wide / 4}
          yPos={yPos}
          fill={0x000000}
        />
        <RelativeRectangle
          {...this.props}
          wide={wide / 2}
          tall={0.5}
          xPos={xPos + wide / 4}
          yPos={yPos + tall - 1}
          fill={0x000000}
        />
        <RelativeRectangle
          {...this.props}
          wide={wide / 2}
          tall={0.5}
          xPos={xPos + wide / 4}
          yPos={yPos + tall - 0.5}
          fill={0xc0c8e0}
        />
        <ReelSpinner
          {...this.props}
          wide={wide / 2}
          tall={tall - 1.5}
          xPos={xPos + wide / 4}
          yPos={yPos + 0.5}
        />
      </React.Fragment>
    );
  }
}

export default Reel;
