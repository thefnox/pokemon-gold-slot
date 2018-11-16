/**
 *
 * BottomText
 *
 */

import React from 'react';
import TextDisplay from 'components/TextDisplay';
import BetSelect from 'components/BetSelect';

/* eslint-disable react/prefer-stateless-function */
class BottomText extends React.Component {
  renderText = () => {
    const { playing, ended, win, earnings } = this.props;
    if (!playing) {
      return 'Bet how many\ncoins?';
    }
    if (ended) {
      if (win) {
        return `You won\n${earnings} coins!`;
      }
      return 'Darn!';
    }
    return 'Start!';
  };

  render() {
    const { playing } = this.props;
    return (
      <React.Fragment>
        <TextDisplay
          {...this.props}
          xPos={0}
          yPos={46.5}
          wide={80}
          textWidth={45}
          tall={25.5}
          text={this.renderText()}
        />
        {!playing && (
          <BetSelect
            {...this.props}
            xPos={50}
            yPos={32}
            wide={30}
            textWidth={20}
            tall={40}
          />
        )}
      </React.Fragment>
    );
  }
}

BottomText.propTypes = {};

export default BottomText;
