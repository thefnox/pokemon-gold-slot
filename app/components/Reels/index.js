/**
 *
 * Reels
 *
 */

import React from 'react';
import ReelsDecoration from 'components/ReelsDecoration';
import Reel from 'components/Reel';

/* eslint-disable react/prefer-stateless-function */
class Reels extends React.Component {
  render() {
    const {
      distributions,
      reelOneValue,
      reelOneTarget,
      reelOneSpinning,
      reelTwoValue,
      reelTwoTarget,
      reelTwoSpinning,
      reelThreeValue,
      reelThreeTarget,
      reelThreeSpinning,
    } = this.props;
    // Decorations come first
    return (
      <React.Fragment>
        <ReelsDecoration {...this.props} />
        <Reel
          {...this.props}
          wide={16}
          tall={25}
          xPos={16}
          yPos={14.5}
          distribution={distributions.get(0)}
          value={reelOneValue}
          spinning={reelOneSpinning}
          target={reelOneTarget}
          reelIndex={0}
        />
        <Reel
          {...this.props}
          wide={16}
          tall={25}
          xPos={32}
          yPos={14.5}
          distribution={distributions.get(1)}
          value={reelTwoValue}
          spinning={reelTwoSpinning}
          target={reelTwoTarget}
          reelIndex={1}
        />
        <Reel
          {...this.props}
          wide={16}
          tall={25}
          xPos={48}
          yPos={14.5}
          distribution={distributions.get(2)}
          value={reelThreeValue}
          spinning={reelThreeSpinning}
          target={reelThreeTarget}
          reelIndex={2}
        />
      </React.Fragment>
    );
  }
}

export default Reels;
