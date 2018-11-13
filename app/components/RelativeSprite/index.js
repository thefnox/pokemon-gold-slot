/**
 *
 * RelativeSprite
 *
 */

import React from 'react';
import { Sprite } from '@inlet/react-pixi';
import withRelativeCoords from 'components/withRelativeCoords';

/* eslint-disable react/prefer-stateless-function */
class RelativeSprite extends React.Component {
  render() {
    return <Sprite {...this.props} />;
  }
}

export default withRelativeCoords(RelativeSprite);
