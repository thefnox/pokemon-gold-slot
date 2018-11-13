/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Stage } from '@inlet/react-pixi';
import GameLayout from 'components/GameLayout';

/* eslint-disable react/prefer-stateless-function */
export default class GamePage extends React.PureComponent {
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
    const { credits, payout } = this.state;
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
          <GameLayout
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
