/**
 *
 * Layout
 *
 */

import React from 'react';
import Header from 'components/Header';
import Reels from 'components/Reels';
import TextDisplay from 'components/TextDisplay';

/* eslint-disable react/prefer-stateless-function */
class GameLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        <Reels {...this.props} />
        <TextDisplay {...this.props} />
      </React.Fragment>
    );
  }
}
export default GameLayout;
