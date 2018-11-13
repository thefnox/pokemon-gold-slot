/**
 *
 * ScoreDisplay
 *
 */

import React from 'react';
import { Text } from '@inlet/react-pixi';
import Rectangle from 'components/Rectangle';
import withRelativeCoords from 'components/withRelativeCoords';

/* eslint-disable react/prefer-stateless-function */
class ScoreDisplay extends React.Component {
  render() {
    const { x, y, label, height, value } = this.props;

    const labelStyle = new PIXI.TextStyle({
      align: 'center',
      fontFamily: 'PokemonGB',
      fill: '#ffffff',
      fontSize: height / 2,
      wordWrap: false,
      wordWrapWidth: 440,
    });

    const valueStyle = new PIXI.TextStyle({
      align: 'center',
      fontFamily: 'PokemonGB',
      fill: '#000000',
      fontSize: height / 2,
      wordWrap: false,
      wordWrapWidth: 440,
    });
    return (
      <React.Fragment>
        <Rectangle {...this.props} height={height / 2} fill={0x000000} />
        <Rectangle
          {...this.props}
          y={y + height / 2}
          height={height / 2}
          fill={0xffffff}
        />
        <Text x={x} height={height / 2} style={labelStyle} text={label} />
        <Text
          x={x}
          height={height / 2}
          y={y + height / 2}
          style={valueStyle}
          text={value}
        />
      </React.Fragment>
    );
  }
}

export default withRelativeCoords(ScoreDisplay);
