/**
 *
 * SoundToggle
 *
 */

import React from 'react';
import RelativeSprite from 'components/RelativeSprite';

/* eslint-disable react/prefer-stateless-function */
class SoundToggle extends React.Component {
  render() {
    const { toggleMusic, soundEnabled } = this.props;
    return (
      <RelativeSprite
        {...this.props}
        image={soundEnabled ? './soundon.png' : './soundoff.png'}
        interactive
        pointerdown={() => {
          toggleMusic();
        }}
      />
    );
  }
}

SoundToggle.propTypes = {};

export default SoundToggle;
