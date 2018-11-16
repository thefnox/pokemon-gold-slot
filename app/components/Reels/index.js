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
      reelOneHasStopped,
      reelTwoValue,
      reelTwoTarget,
      reelTwoSpinning,
      reelTwoHasStopped,
      reelThreeValue,
      reelThreeTarget,
      reelThreeSpinning,
      reelThreeHasStopped,
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
          reelStopped={reelOneHasStopped}
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
          reelStopped={reelTwoHasStopped}
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
          reelStopped={reelThreeHasStopped}
          spinning={reelThreeSpinning}
          target={reelThreeTarget}
          reelIndex={2}
        />
      </React.Fragment>
    );
  }
}

export default Reels;
