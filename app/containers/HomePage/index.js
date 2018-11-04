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
import Layout from 'components/Layout';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Stage width={800} height={720} options={{ backgroundColor: 0xc0c048 }}>
        <Layout />
      </Stage>
    );
  }
}
