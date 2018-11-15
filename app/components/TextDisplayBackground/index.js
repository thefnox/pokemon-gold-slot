/**
 *
 * TextDisplayBackground
 *
 */

import React from 'react';
import { Container } from '@inlet/react-pixi';
import RelativeRectangle from 'components/RelativeRectangle';
import withRelativeCoords from 'components/withRelativeCoords';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class TextDisplayBackground extends React.Component {
  render() {
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
        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={wide}
          tall={tall}
          xPos={0}
          yPos={0}
          fill={0xffffff}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={wide - 4}
          tall={0.5}
          xPos={2}
          yPos={2}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={wide - 5}
          tall={1}
          xPos={2.5}
          yPos={3}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={wide - 4}
          tall={1}
          xPos={2}
          yPos={tall - 2}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={wide - 5}
          tall={0.5}
          xPos={2.5}
          yPos={tall - 3}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={tall - 5}
          xPos={1}
          yPos={3}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={tall - 7}
          xPos={2}
          yPos={4}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={tall - 5}
          xPos={wide - 1.5}
          yPos={3}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={tall - 7}
          xPos={wide - 2.5}
          yPos={4}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={1}
          tall={1}
          xPos={wide - 3}
          yPos={4}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={1}
          tall={1}
          xPos={2.5}
          yPos={4}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={0.5}
          xPos={wide - 2}
          yPos={2.5}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={0.5}
          xPos={1.5}
          yPos={2.5}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={1}
          xPos={1.5}
          yPos={tall - 2.5}
          fill={0x000000}
        />

        <RelativeRectangle
          width={origWidth}
          height={origHeight}
          wide={0.5}
          tall={1}
          xPos={wide - 2}
          yPos={tall - 2.5}
          fill={0x000000}
        />
      </React.Fragment>
    );
  }
}

export default withRelativeCoords(TextDisplayBackground);
