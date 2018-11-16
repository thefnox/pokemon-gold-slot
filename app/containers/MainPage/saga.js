import {
  call,
  fork,
  put,
  select,
  take,
  cancel,
  cancelled,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  getReelTarget,
  calcFinalValues,
  getReelAffinity,
} from 'utils/reelUtils';
import { calcEarnings } from 'utils/reelUtils';
import {
  PLAY_SFX,
  SET_REEL_ONE_SPINNING,
  SET_REEL_TWO_SPINNING,
  SET_REEL_THREE_SPINNING,
  SET_REEL_ONE_TARGET,
  SET_REEL_TWO_TARGET,
  SET_REEL_THREE_TARGET,
  SET_REEL_ONE_STOPPED,
  SET_REEL_TWO_STOPPED,
  SET_REEL_THREE_STOPPED,
  SET_GOLEM_MODE,
  SET_OFFSET_Y,
  SET_BET,
  SET_ENDED,
  SET_REEL_TARGET,
  SET_PLAYING,
  SET_CREDITS,
  SET_PAYOUT,
  SET_WINNING,
  START_PLAYING,
  STOP_PLAYING,
  INPUT_ACTION,
} from './constants';
import { selectMainPageDomain } from './selectors';

function* determineWin() {
  if (Math.random() * 100 <= 10) {
    yield* golemMode(3 + Math.random() * 4);
  }
  const main = yield select(selectMainPageDomain);
  const distributions = main.get('distributions');
  const symbols = main.get('symbols');
  const bet = main.get('bet');
  const credits = main.get('credits');
  const payout = main.get('payout');
  const finalValues = calcFinalValues({
    distributions,
    reelOne: main.get('reelOneValue'),
    reelTwo: main.get('reelTwoValue'),
    reelThree: main.get('reelThreeValue'),
  });

  const winnerSymbol = calcEarnings({ finalValues, symbols, bet });
  const earnings = winnerSymbol.get('payout');

  yield put({ type: SET_ENDED });
  if (earnings === 0) {
    yield put({ type: SET_WINNING, win: false });
    yield call(delay, 1000);
    yield put({ type: SET_PLAYING, playing: false });
  } else {
    yield put({ type: SET_CREDITS, credits: credits + earnings });
    yield put({ type: SET_PAYOUT, payout: payout + earnings });
    yield put({ type: SET_WINNING, win: true, winPayout: earnings });
    yield call(delay, 2000);
    yield put({ type: STOP_PLAYING, playing: false });
  }
}

function* golemMode(times) {
  let i = 0;
  while (i < times) {
    yield put({ type: SET_GOLEM_MODE, enabled: true });
    yield put({ type: PLAY_SFX, enabled: true, source: './golem.mp3' });
    yield call(delay, 100);
    yield* setReelTarget(3, -1);
    yield put({ type: SET_OFFSET_Y, offset: 0.5 });
    yield call(delay, 32);
    yield put({ type: SET_OFFSET_Y, offset: -0.5 });
    yield call(delay, 32);
    yield put({ type: SET_OFFSET_Y, offset: 0.5 });
    yield call(delay, 32);
    yield put({ type: SET_OFFSET_Y, offset: -0.5 });
    yield call(delay, 32);
    yield put({ type: SET_OFFSET_Y, offset: 0 });
    yield call(delay, 500);
    yield put({ type: SET_GOLEM_MODE, enabled: false });
    yield call(delay, 50);
    i += 1;
  }
}

function* setReelTarget(reel, increment = 0) {
  const main = yield select(selectMainPageDomain);
  const distributions = main.get('distributions');
  const symbols = main.get('symbols');
  let value = 0;
  let index = 0;
  let distribution = null;
  switch (reel) {
    case 1:
      index = main.get('reelOneValue');
      distribution = distributions.get(0);
      value = getReelTarget({
        distribution,
        index,
        increment:
          increment !== 0
            ? increment
            : getReelAffinity({ distribution, index, symbols }),
      });
      yield put({ type: SET_REEL_ONE_TARGET, value });
      break;
    case 2:
      index = main.get('reelTwoValue');
      distribution = distributions.get(1);
      value = getReelTarget({
        distribution,
        index,
        increment:
          increment !== 0
            ? increment
            : getReelAffinity({ distribution, index, symbols }),
      });
      yield put({ type: SET_REEL_TWO_TARGET, value });
      break;
    case 3:
      index = main.get('reelThreeValue');
      distribution = distributions.get(2);
      value = getReelTarget({
        distribution,
        index,
        increment:
          increment !== 0
            ? increment
            : getReelAffinity({ distribution, index, symbols }),
      });
      yield put({ type: SET_REEL_THREE_TARGET, value });
      break;
    default:
      break;
  }
}

function* autoStopReel(type) {
  try {
    let i = 0;
    while (i < 2000) {
      yield call(delay, 100);
      i += 100;
    }
    yield put({ type, spinning: false });
  } finally {
    if (yield cancelled()) {
      // Cancelled
    }
  }
}

function* handleUserInput() {
  try {
    while (true) {
      if (yield take(INPUT_ACTION)) {
        const main = yield select(selectMainPageDomain);
        if (main.get('reelOneSpinning')) {
          yield put({ type: SET_REEL_ONE_SPINNING, spinning: false });
        } else if (main.get('reelTwoSpinning')) {
          yield put({ type: SET_REEL_TWO_SPINNING, spinning: false });
        } else if (main.get('reelThreeSpinning')) {
          yield put({ type: SET_REEL_THREE_SPINNING, spinning: false });
        }
      }
    }
  } finally {
    if (yield cancelled()) {
      // Cancelled
    }
  }
}

function* playClickSound() {
  while (yield take(SET_BET)) {
    yield put({ type: PLAY_SFX, enabled: true, source: './click.mp3' });
  }
}

// Individual exports for testing
export default function* mainPageSaga() {
  const clickSound = yield fork(playClickSound);
  while (yield take(START_PLAYING)) {
    const userInput = yield fork(handleUserInput);
    yield put({ type: PLAY_SFX, enabled: true, source: './start.mp3' });
    const reelOneAutoSpin = yield fork(autoStopReel, SET_REEL_ONE_SPINNING);
    yield take(SET_REEL_ONE_SPINNING);
    yield cancel(reelOneAutoSpin);
    yield* setReelTarget(1);
    yield take(SET_REEL_ONE_STOPPED);
    yield put({ type: PLAY_SFX, enabled: true, source: './boop.mp3' });

    const reelTwoAutoSpin = yield fork(autoStopReel, SET_REEL_TWO_SPINNING);
    yield take(SET_REEL_TWO_SPINNING);
    yield cancel(reelTwoAutoSpin);
    yield* setReelTarget(2);
    yield take(SET_REEL_TWO_STOPPED);
    yield put({ type: PLAY_SFX, enabled: true, source: './boop.mp3' });

    const reelThreeAutoSpin = yield fork(autoStopReel, SET_REEL_THREE_SPINNING);
    yield take(SET_REEL_THREE_SPINNING);
    yield cancel(reelThreeAutoSpin);
    yield cancel(userInput);
    yield* setReelTarget(3);
    yield take(SET_REEL_THREE_STOPPED);
    yield put({ type: PLAY_SFX, enabled: true, source: './boop.mp3' });

    yield fork(determineWin);
  }
}
