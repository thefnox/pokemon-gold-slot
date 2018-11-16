/**
 *
 * MainPage
 *
 */

import React from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Stage, withPixiApp } from '@inlet/react-pixi';
import GameLayout from 'components/GameLayout';
import {
  inputAction,
  setPayout,
  setCredits,
  startPlaying,
  setReelValue,
  setReelTarget,
  toggleSound,
  setBet,
  stopReelOne,
  stopReelTwo,
  stopReelThree,
  setSFXPlaying,
  markReelOneAsStopped,
  markReelTwoAsStopped,
  markReelThreeAsStopped,
} from 'containers/MainPage/actions';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectBet,
  makeSelectReelOneValue,
  makeSelectReelTwoValue,
  makeSelectReelThreeValue,
  makeSelectReelOneSpinning,
  makeSelectReelTwoSpinning,
  makeSelectReelThreeSpinning,
  makeSelectReelOneTarget,
  makeSelectReelTwoTarget,
  makeSelectReelThreeTarget,
  makeSelectXOffset,
  makeSelectYOffset,
  makeSelectDistributions,
  makeSelectSymbols,
  makeSelectCredits,
  makeSelectPayout,
  makeSelectIsPlaying,
  makeSelectWin,
  makeSelectGolemMode,
  makeSelectSoundEnabled,
  makeSelectPlayingSFX,
  makeSelectSFXSource,
  makeSelectEarnings,
  makeSelectEnded,
} from './selectors';
import saga from './saga';

const Game = withPixiApp(GameLayout);

const FontHotfix = styled.p`
  color: white;
  font-size: 24px;
  font-family: 'PokemonGB';
`;

/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.handleClick = this.handleInput.bind(this);
  }

  state = {
    width: null,
    height: null,
  };

  calcWidth() {
    const node = this.wrapperRef.current;
    let width = 0;
    if (this.state.width) {
      return this.state.width;
    }
    if (node) {
      const dimensions = node.getBoundingClientRect();
      width = Math.min(dimensions.width, dimensions.height);
    }
    width = Math.min(window.innerHeight, window.innerWidth);
    return width;
  }

  calcHeight() {
    if (this.state.height) {
      return this.state.height;
    }
    const height = this.calcWidth() * 0.9;
    if (height > 0) {
      this.setState({ height });
    }
    return height;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleInput);
    document.addEventListener('touchstart', this.handleTouch);
    this.setState({
      width: this.calcWidth(),
      height: this.calcHeight(),
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleInput);
    document.removeEventListener('touchstart', this.handleTouch);
  }

  handleTouch = () => {
    const { beginPlaying, setInput, playing } = this.props;

    if (!playing) {
      beginPlaying();
    } else {
      setInput();
    }
  };

  handleInput = event => {
    const { beginPlaying, setInput, playing, bet, updateBet } = this.props;

    if (!playing) {
      switch (event.key) {
        case 'Down':
        case 'ArrowDown':
        case 'S':
          updateBet(Math.max(bet - 1, 1));
          event.preventDefault();
          break;
        case 'Up':
        case 'ArrowUp':
        case 'W':
          updateBet(Math.min(bet + 1, 3));
          event.preventDefault();
          break;
        default:
          beginPlaying();
          break;
      }
    } else {
      setInput();
    }
  };

  renderSound = () => {
    // As weird as it may sound, it's correct
    const { SFXSource, playSFX, stopSFX } = this.props;
    return (
      <React.Fragment>
        <Sound
          url="./music.mp3"
          volume={50}
          playStatus={Sound.status.PLAYING}
          loop
        />
        {playSFX && (
          <Sound
            url={SFXSource}
            volume={50}
            playStatus={playSFX ? Sound.status.PLAYING : Sound.status.PAUSED}
            onFinishedPlaying={() => stopSFX()}
          />
        )}
      </React.Fragment>
    );
  };

  render() {
    const width = this.calcWidth();
    const height = this.calcHeight();
    const { soundEnabled } = this.props;
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    return (
      <div ref={this.wrapperRef}>
        {soundEnabled && this.renderSound()}
        <Stage
          width={width}
          height={height}
          options={{
            backgroundColor: 0xc0c048,
          }}
        >
          <Game {...this.props} width={width} height={height} />
        </Stage>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  bet: makeSelectBet(),
  reelOneSpinning: makeSelectReelOneSpinning(),
  reelTwoSpinning: makeSelectReelTwoSpinning(),
  reelThreeSpinning: makeSelectReelThreeSpinning(),
  reelOneTarget: makeSelectReelOneTarget(),
  reelTwoTarget: makeSelectReelTwoTarget(),
  reelThreeTarget: makeSelectReelThreeTarget(),
  reelOneValue: makeSelectReelOneValue(),
  reelTwoValue: makeSelectReelTwoValue(),
  reelThreeValue: makeSelectReelThreeValue(),
  golemMode: makeSelectGolemMode(),
  distributions: makeSelectDistributions(),
  xOffset: makeSelectXOffset(),
  yOffset: makeSelectYOffset(),
  symbols: makeSelectSymbols(),
  credits: makeSelectCredits(),
  payout: makeSelectPayout(),
  soundEnabled: makeSelectSoundEnabled(),
  playing: makeSelectIsPlaying(),
  win: makeSelectWin(),
  playSFX: makeSelectPlayingSFX(),
  SFXSource: makeSelectSFXSource(),
  earnings: makeSelectEarnings(),
  ended: makeSelectEnded(),
});

function mapDispatchToProps(dispatch) {
  return {
    updatePayout: amount => dispatch(setPayout(amount)),
    updateCredits: amount => dispatch(setCredits(amount)),
    updateBet: bet => dispatch(setBet(bet)),
    updateValue: (reel, value) => dispatch(setReelValue(reel, value)),
    updateTarget: (reel, value) => dispatch(setReelTarget(reel, value)),
    toggleMusic: () => dispatch(toggleSound()),
    beginPlaying: () => dispatch(startPlaying()),
    hitReelOne: () => dispatch(stopReelOne()),
    hitReelTwo: () => dispatch(stopReelTwo()),
    hitReelThree: obj => dispatch(stopReelThree(obj)),
    stopSFX: () => dispatch(setSFXPlaying(false)),
    setInput: () => dispatch(inputAction()),
    reelOneHasStopped: () => dispatch(markReelOneAsStopped()),
    reelTwoHasStopped: () => dispatch(markReelTwoAsStopped()),
    reelThreeHasStopped: () => dispatch(markReelThreeAsStopped()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'mainPage', saga });
export default compose(
  withSaga,
  withConnect,
)(MainPage);
