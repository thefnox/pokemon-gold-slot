/**
 *
 * Layout
 *
 */

import React from 'react';
import Header from 'components/Header';
import Reels from 'components/Reels';
import BottomText from 'components/BottomText';
import Golem from 'components/Golem';

/* eslint-disable react/prefer-stateless-function */
class GameLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        <Reels {...this.props} />
        <Golem {...this.props} />
        <BottomText {...this.props} />
      </React.Fragment>
    );
  }
}
export default GameLayout;
