/**
 *
 * RelativeRectangle
 *
 */

import React from 'react';
import Rectangle from 'components/Rectangle';
import withRelativeCoords from 'components/withRelativeCoords';

/* eslint-disable react/prefer-stateless-function */
class RelativeRectangle extends React.Component {
  render() {
    return <Rectangle {...this.props} />;
  }
}

export default withRelativeCoords(RelativeRectangle);
