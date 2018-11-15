/**
 *
 * RelativeText
 *
 */

import React from 'react';
import { Text } from '@inlet/react-pixi';
import withRelativeCoords from 'components/withRelativeCoords';

/* eslint-disable react/prefer-stateless-function */
class RelativeText extends React.Component {
  render() {
    return <Text {...this.props} />;
  }
}

export default withRelativeCoords(RelativeText);
