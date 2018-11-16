import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.get('main', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () =>
  createSelector(selectMainPageDomain, substate => substate.toJS());

const makeSelectBet = () =>
  createSelector(selectMainPageDomain, substate => substate.get('bet'));

const makeSelectReelOneSpinning = () =>
  createSelector(selectMainPageDomain, substate =>
    substate.get('reelOneSpinning'),
  );

const makeSelectReelTwoSpinning = () =>
  createSelector(selectMainPageDomain, substate =>
    substate.get('reelTwoSpinning'),
  );

const makeSelectReelThreeSpinning = () =>
  createSelector(selectMainPageDomain, substate =>
    substate.get('reelThreeSpinning'),
  );

const makeSelectReelOneTarget = () =>
  createSelector(selectMainPageDomain, substate =>
    substate.get('reelOneTarget'),
  );

const makeSelectReelTwoTarget = () =>
  createSelector(selectMainPageDomain, substate =>
    substate.get('reelTwoTarget'),
  );

const makeSelectReelThreeTarget = () =>
  createSelector(selectMainPageDomain, substate =>
    substate.get('reelThreeTarget'),
  );

const makeSelectReelOneValue = () =>
  createSelector(selectMainPageDomain, substate =>
    substate.get('reelOneValue'),
  );

const makeSelectReelTwoValue = () =>
  createSelector(selectMainPageDomain, substate =>
    substate.get('reelTwoValue'),
  );

const makeSelectReelThreeValue = () =>
  createSelector(selectMainPageDomain, substate =>
    substate.get('reelThreeValue'),
  );

const makeSelectDistributions = () =>
  createSelector(selectMainPageDomain, substate =>
    substate.get('distributions'),
  );

const makeSelectSymbols = () =>
  createSelector(selectMainPageDomain, substate => substate.get('symbols'));

const makeSelectCredits = () =>
  createSelector(selectMainPageDomain, substate => substate.get('credits'));

const makeSelectPayout = () =>
  createSelector(selectMainPageDomain, substate => substate.get('payout'));

const makeSelectIsPlaying = () =>
  createSelector(selectMainPageDomain, substate => substate.get('playing'));

const makeSelectWin = () =>
  createSelector(selectMainPageDomain, substate => substate.get('win'));

const makeSelectGolemMode = () =>
  createSelector(selectMainPageDomain, substate => substate.get('golemMode'));

const makeSelectXOffset = () =>
  createSelector(selectMainPageDomain, substate => substate.get('xOffset'));

const makeSelectYOffset = () =>
  createSelector(selectMainPageDomain, substate => substate.get('yOffset'));

const makeSelectSoundEnabled = () =>
  createSelector(selectMainPageDomain, substate =>
    substate.get('soundEnabled'),
  );

const makeSelectPlayingSFX = () =>
  createSelector(selectMainPageDomain, substate => substate.get('playSFX'));

const makeSelectSFXSource = () =>
  createSelector(selectMainPageDomain, substate => substate.get('SFXSource'));

const makeSelectEarnings = () =>
  createSelector(selectMainPageDomain, substate => substate.get('earnings'));

const makeSelectEnded = () =>
  createSelector(selectMainPageDomain, substate => substate.get('ended'));

export default makeSelectMainPage;
export {
  selectMainPageDomain,
  makeSelectBet,
  makeSelectMainPage,
  makeSelectReelOneValue,
  makeSelectReelTwoValue,
  makeSelectReelThreeValue,
  makeSelectReelOneSpinning,
  makeSelectReelTwoSpinning,
  makeSelectReelThreeSpinning,
  makeSelectReelOneTarget,
  makeSelectReelTwoTarget,
  makeSelectReelThreeTarget,
  makeSelectDistributions,
  makeSelectSymbols,
  makeSelectCredits,
  makeSelectPayout,
  makeSelectIsPlaying,
  makeSelectWin,
  makeSelectXOffset,
  makeSelectYOffset,
  makeSelectGolemMode,
  makeSelectSoundEnabled,
  makeSelectPlayingSFX,
  makeSelectSFXSource,
  makeSelectEarnings,
  makeSelectEnded,
};
