/**
 *
 * Header
 *
 */

import React from 'react';
import ScoreDisplay from 'components/ScoreDisplay';
import RelativeRectangle from 'components/RelativeRectangle';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { width, height, credits, payout } = this.props;
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
        />
        <RelativeRectangle
          width={width}
          height={height}
          xPos={0}
          yPos={3}
          wide={80}
          tall={0.5}
          fill={0xc0c8e0}
        />
        <RelativeRectangle
          width={width}
          height={height}
          xPos={0}
          yPos={4}
          wide={80}
          tall={0.5}
          fill={0xc0c8e0}
        />
        <RelativeRectangle
          width={width}
          height={height}
          xPos={0}
          yPos={5}
          wide={80}
          tall={0.5}
          fill={0xc0c8e0}
        />
        <ScoreDisplay
          width={width}
          height={height}
          xPos={21}
          yPos={0.5}
          wide={16}
          tall={6}
          label="CREDITS"
          value={credits}
        />
        <ScoreDisplay
          width={width}
          height={height}
          xPos={43}
          yPos={0.5}
          wide={16}
          tall={6}
          label="PAYOUT"
          value={payout}
        />
      </React.Fragment>
    );
  }
}

Header.propTypes = {};

export default Header;
