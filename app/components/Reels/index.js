/**
 *
 * Reels
 *
 */

import React from 'react';
import ReelsDecoration from 'components/ReelsDecoration';
import RelativeSprite from 'components/RelativeSprite';

/* eslint-disable react/prefer-stateless-function */
class Reels extends React.Component {
  render() {
    // Decorations come first
    return (
      <React.Fragment>
        <ReelsDecoration {...this.props} />
      </React.Fragment>
    );
  }
}

export default Reels;
