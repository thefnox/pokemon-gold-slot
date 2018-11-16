/*
 *
 * MainPage reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  DEFAULT_ACTION,
  PLAY_SFX,
  SET_PAYOUT,
  SET_CREDITS,
  SET_WINNING,
  SET_BET,
  SET_ENDED,
  SET_REEL_ONE_SPINNING,
  SET_REEL_TWO_SPINNING,
  SET_REEL_THREE_SPINNING,
  SET_REEL_ONE_STOPPED,
  SET_REEL_TWO_STOPPED,
  SET_REEL_THREE_STOPPED,
  SET_REEL_ONE_VALUE,
  SET_REEL_TWO_VALUE,
  SET_REEL_THREE_VALUE,
  SET_REEL_ONE_TARGET,
  SET_REEL_TWO_TARGET,
  SET_REEL_THREE_TARGET,
  START_PLAYING,
  STOP_PLAYING,
  INPUT_ACTION,
  SET_GOLEM_MODE,
  SET_OFFSET_Y,
  TOGGLE_SOUND,
} from './constants';

export const initialState = fromJS({
  xOffset: 0,
  yOffset: 0,
  credits: 100,
  payout: 0,
  earnings: 0,
  bet: 1,
  playSFX: false,
  SFXSource: null,
  playing: false,
  golemMode: false,
  soundEnabled: true,
  ended: false,
  reelOneValue: 0,
  reelOneTarget: 0,
  reelOneSpinning: false,
  reelTwoValue: 0,
  reelTwoTarget: 0,
  reelTwoSpinning: false,
  reelThreeValue: 0,
  reelThreeTarget: 0,
  reelThreeSpinning: false,
  win: false,
  symbols: [
    {
      icon: '/7.png',
      payout: 300,
    },
    {
      icon: '/pokeball.png',
      payout: 50,
    },
    {
      icon: '/staryu.png',
      payout: 15,
    },
    {
      icon: '/squirtle.png',
      payout: 10,
    },
    {
      icon: '/pikachu.png',
      payout: 8,
    },
    {
      icon: '/cherry.png',
      payout: 6,
    },
  ],
  distributions: [
    [0, 5, 2, 4, 3, 0, 5, 2, 4, 3, 1, 5, 2, 4, 3],
    [0, 4, 5, 3, 2, 1, 4, 5, 3, 2, 1, 4, 5, 3, 2],
    [0, 4, 5, 3, 2, 4, 5, 3, 2, 4, 1, 5, 3, 2, 4],
  ],
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case PLAY_SFX:
      return state
        .set('playSFX', action.enabled)
        .set('SFXSource', action.source);
    case INPUT_ACTION:
      return state;
    case SET_PAYOUT:
      return state.set('payout', action.payout);
    case SET_CREDITS:
      return state.set('credits', action.credits);
    case SET_WINNING:
      return state.set('win', action.win).set('earnings', action.winPayout);
    case START_PLAYING:
      return state
        .set('playing', true)
        .set('ended', false)
        .set('earnings', 0)
        .set('credits', state.get('credits') - state.get('bet'))
        .set('reelOneSpinning', true)
        .set('reelTwoSpinning', true)
        .set('reelThreeSpinning', true);
    case STOP_PLAYING:
      return state.set('playing', false);
    case SET_BET:
      return state.set('bet', Math.min(Math.max(action.bet, 0), 3));
    case SET_REEL_ONE_SPINNING:
      return state.set('reelOneSpinning', action.spinning);
    case SET_REEL_TWO_SPINNING:
      return state.set('reelTwoSpinning', action.spinning);
    case SET_REEL_THREE_SPINNING:
      return state.set('reelThreeSpinning', action.spinning);
    case SET_REEL_ONE_STOPPED:
      return state;
    case SET_REEL_TWO_STOPPED:
      return state;
    case SET_REEL_THREE_STOPPED:
      return state;
    case SET_REEL_ONE_VALUE:
      return state.set('reelOneValue', action.value);
    case SET_REEL_TWO_VALUE:
      return state.set('reelTwoValue', action.value);
    case SET_REEL_THREE_VALUE:
      return state.set('reelThreeValue', action.value);
    case SET_REEL_ONE_TARGET:
      return state.set('reelOneTarget', action.value);
    case SET_REEL_TWO_TARGET:
      return state.set('reelTwoTarget', action.value);
    case SET_REEL_THREE_TARGET:
      return state.set('reelThreeTarget', action.value);
    case SET_GOLEM_MODE:
      return state.set('golemMode', action.enabled);
    case SET_OFFSET_Y:
      return state.set('yOffset', action.offset);
    case SET_ENDED:
      return state.set('ended', true);
    case TOGGLE_SOUND:
      return state.set('soundEnabled', !state.get('soundEnabled'));
    default:
      return state;
  }
}

export default mainPageReducer;
