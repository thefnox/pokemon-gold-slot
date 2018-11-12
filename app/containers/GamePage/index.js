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

    return (
      <div ref={this.wrapperRef}>
        <Stage
          width={width}
          height={height}
          options={{
            backgroundColor: 0xc0c048,
          }}
        >
          <GameLayout width={width} height={height} {...this.props} />
        </Stage>
      </div>
    );
  }
}
