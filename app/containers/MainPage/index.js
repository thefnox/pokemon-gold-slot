/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Stage, withPixiApp } from '@inlet/react-pixi';
import GameLayout from 'components/GameLayout';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMainPage from './selectors';
import reducer from './reducer';
import saga from './saga';

const Game = withPixiApp(GameLayout);


/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  state = {
    xOffset: 0,
    yOffset: 0,
    credits: 100,
    payout: 0,
    bet: 1,
    playing: false,
    reelOneSpinning: true,
    reelTwoSpinning: true,
    reelThreeSpinning: true,
    win: false,
    symbols: [
      {
        icon: '/7.png',
        payout: 300,
      },
      {
        icon: '/pokeball.png',
        payout: 50,
      },
      {
        icon: '/staryu.png',
        payout: 15,
      },
      {
        icon: '/squirtle.png',
        payout: 10,
      },
      {
        icon: '/pikachu.png',
        payout: 8,
      },
      {
        icon: '/cherry.png',
        payout: 6,
      },
    ],
    distributions: [
      [0, 5, 2, 4, 3, 0, 5, 2, 4, 3, 1, 5, 2, 4, 3],
      [0, 4, 5, 3, 2, 1, 4, 5, 3, 2, 1, 4, 5, 3, 2],
      [0, 4, 5, 3, 2, 4, 5, 3, 2, 4, 1, 5, 3, 2, 4],
    ],
  };


  calcWidth() {
    const node = this.wrapperRef.current;
    if (node) {
      const dimensions = node.getBoundingClientRect();
      return Math.min(dimensions.width, dimensions.height);
    }
    return Math.min(window.innerHeight, window.innerWidth);
  }

  calcHeight() {
    return this.calcWidth() * 0.9;
  }

  render() {
    const width = this.calcWidth();
    const height = this.calcHeight();
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    return (
      <div ref={this.wrapperRef}>
        <Stage
          width={width}
          height={height}
          options={{
            backgroundColor: 0xc0c048,
          }}
        >
          <Game
            {...this.props}
            width={width}
            height={height}
            {...this.state}
          />
        </Stage>
      </div>
    );
  }
}

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mainPage', reducer });
const withSaga = injectSaga({ key: 'mainPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainPage);
