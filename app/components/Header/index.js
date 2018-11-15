/**
 *
 * Header
 *
 */

import React from 'react';
import SoundToggle from 'components/SoundToggle';
import ScoreDisplay from 'components/ScoreDisplay';
import RelativeRectangle from 'components/RelativeRectangle';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { width, height, credits, payout, xOffset, yOffset } = this.props;
    return (
      <React.Fragment>
        <RelativeRectangle
          width={width}
          height={height}
          xPos={0}
          yPos={2}
          wide={80}
          tall={0.5}
          fill={0xc0c8e0}
          xOffset={xOffset}
          yOffset={yOffset}
        />
        <RelativeRectangle
          width={width}
          height={height}
          xPos={0}
          yPos={3}
          wide={80}
          tall={0.5}
          fill={0xc0c8e0}
          xOffset={xOffset}
          yOffset={yOffset}
        />
        <RelativeRectangle
          width={width}
          height={height}
          xPos={0}
          yPos={4}
          wide={80}
          tall={0.5}
          fill={0xc0c8e0}
          xOffset={xOffset}
          yOffset={yOffset}
        />
        <RelativeRectangle
          width={width}
          height={height}
          xPos={0}
          yPos={5}
          wide={80}
          tall={0.5}
          fill={0xc0c8e0}
          xOffset={xOffset}
          yOffset={yOffset}
        />
        <ScoreDisplay
          {...this.props}
          width={width}
          height={height}
          xPos={20}
          yPos={0.5}
          wide={16}
          tall={6}
          label="CREDITS"
          value={credits}
          xOffset={xOffset}
          yOffset={yOffset}
        />

        <ScoreDisplay
          {...this.props}
          width={width}
          height={height}
          xPos={43.5}
          yPos={0.5}
          wide={16}
          tall={6}
          label="PAYOUT"
          value={payout}
          xOffset={xOffset}
          yOffset={yOffset}
        />

        <SoundToggle
          {...this.props}
          width={width}
          height={height}
          xPos={0}
          yPos={0}
          wide={8}
          tall={8}
          xOffset={xOffset}
          yOffset={yOffset}
        />
      </React.Fragment>
    );
  }
}

Header.propTypes = {};

export default Header;
