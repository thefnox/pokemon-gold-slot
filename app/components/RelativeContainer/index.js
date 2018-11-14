/**
 *
 * RelativeContainer
 *
 */

import React from 'react';
import { Container } from '@inlet/react-pixi';
import withRelativeCoords from 'components/withRelativeCoords';

/* eslint-disable react/prefer-stateless-function */
class RelativeContainer extends React.Component {
  render() {
    return <Container {...this.props} />;
  }
}

export default withRelativeCoords(RelativeContainer);
