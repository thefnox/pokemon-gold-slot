/*
 *
 * MainPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_PAYOUT,
  SET_CREDITS,
  SET_PLAYING,
  SET_REEL_TARGET,
  SET_BET,
  SET_REEL_ONE_SPINNING,
  SET_REEL_ONE_VALUE,
  SET_REEL_ONE_TARGET,
  SET_REEL_ONE_STOPPED,
  SET_REEL_TWO_SPINNING,
  SET_REEL_TWO_VALUE,
  SET_REEL_TWO_TARGET,
  SET_REEL_TWO_STOPPED,
  SET_REEL_THREE_SPINNING,
  SET_REEL_THREE_VALUE,
  SET_REEL_THREE_TARGET,
  SET_REEL_THREE_STOPPED,
  SET_GOLEM_MODE,
  SET_WINNING,
  STOP_PLAYING,
  START_PLAYING,
  INPUT_ACTION,
  PLAY_SFX,
  TOGGLE_SOUND,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function inputAction() {
  return {
    type: INPUT_ACTION,
  };
}

export function setPayout(payout) {
  return {
    type: SET_PAYOUT,
    payout,
  };
}

export function setWinning(win) {
  return {
    type: SET_WINNING,
    win,
  };
}

export function setCredits(credits) {
  return {
    type: SET_CREDITS,
    credits,
  };
}

export function setPlaying(playing) {
  return {
    type: SET_PLAYING,
    playing,
  };
}

export function stopPlaying() {
  return {
    type: STOP_PLAYING,
  };
}

export function startPlaying() {
  return {
    type: START_PLAYING,
  };
}

export function setBet(bet) {
  return {
    type: SET_BET,
    bet,
  };
}

export function stopReelOne() {
  return {
    type: SET_REEL_ONE_SPINNING,
    spinning: false,
  };
}

export function stopReelTwo() {
  return {
    type: SET_REEL_TWO_SPINNING,
    spinning: false,
  };
}

export function stopReelThree(obj) {
  return {
    type: SET_REEL_THREE_SPINNING,
    spinning: false,
    ...obj,
  };
}

export function markReelOneAsStopped() {
  return {
    type: SET_REEL_ONE_STOPPED,
  };
}

export function markReelTwoAsStopped() {
  return {
    type: SET_REEL_TWO_STOPPED,
  };
}

export function markReelThreeAsStopped() {
  return {
    type: SET_REEL_THREE_STOPPED,
  };
}

export function setReelValue(reel, value) {
  if (reel === 1) {
    return {
      type: SET_REEL_TWO_VALUE,
      value,
    };
  }
  if (reel === 2) {
    return {
      type: SET_REEL_THREE_VALUE,
      value,
    };
  }
  return {
    type: SET_REEL_ONE_VALUE,
    value,
  };
}

export function setReelTarget(reel, value) {
  return {
    type: SET_REEL_TARGET,
    reel,
    value,
  };
}

export function setReelOneValue(value) {
  return {
    type: SET_REEL_ONE_VALUE,
    value,
  };
}

export function setReelOneTarget(value) {
  return {
    type: SET_REEL_ONE_TARGET,
    value,
  };
}

export function setReelTwoValue(value) {
  return {
    type: SET_REEL_TWO_VALUE,
    value,
  };
}

export function setReelTwoTarget(value) {
  return {
    type: SET_REEL_TWO_TARGET,
    value,
  };
}

export function setReelThreeValue(value) {
  return {
    type: SET_REEL_THREE_VALUE,
    value,
  };
}

export function setReelThreeTarget(value) {
  return {
    type: SET_REEL_THREE_TARGET,
    value,
  };
}

export function setGolemMode(enabled) {
  return {
    type: SET_GOLEM_MODE,
    enabled,
  };
}

export function setSFXPlaying(enabled, source = null) {
  return {
    type: PLAY_SFX,
    enabled,
    source,
  };
}

export function toggleSound() {
  return {
    type: TOGGLE_SOUND,
  };
}
