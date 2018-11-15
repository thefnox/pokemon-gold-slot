import { Map, List } from 'immutable';

export const getReelAffinity = ({ distribution, symbols, index }) =>
  // We could enhance this to have a particular bias towards a symbol,
  // ...But random chance is just easier.
  Math.round(Math.random() * -3 - 1);

export const getReelTarget = ({ distribution, index, increment }) => {
  const length = distribution.size;
  const x = index + increment;
  if (x >= length) {
    return length - x;
  }
  if (x < 0) {
    return length + x - 1;
  }
  return x;
};

export const getReelTargetSymbol = ({
  distributions,
  index,
  reel,
  increment = 0,
}) => {
  const distribution = distributions.get(reel);
  return distribution.get(getReelTarget({ distribution, index, increment }));
};

export const calcFinalValues = ({
  distributions,
  reelOne,
  reelTwo,
  reelThree,
}) => {
  console.log(`${reelOne} ${reelTwo} ${reelThree}`);
  const list = List([
    List([
      getReelTargetSymbol({
        distributions,
        index: reelOne,
        reel: 0,
        increment: -1,
      }),
      getReelTargetSymbol({
        distributions,
        index: reelOne,
        reel: 0,
        increment: 0,
      }),
      getReelTargetSymbol({
        distributions,
        index: reelOne,
        reel: 0,
        increment: 1,
      }),
    ]),
    List([
      getReelTargetSymbol({
        distributions,
        index: reelTwo,
        reel: 1,
        increment: -1,
      }),
      getReelTargetSymbol({
        distributions,
        index: reelTwo,
        reel: 1,
        increment: 0,
      }),
      getReelTargetSymbol({
        distributions,
        index: reelTwo,
        reel: 1,
        increment: 1,
      }),
    ]),
    List([
      getReelTargetSymbol({
        distributions,
        index: reelThree,
        reel: 2,
        increment: -1,
      }),
      getReelTargetSymbol({
        distributions,
        index: reelThree,
        reel: 2,
        increment: 0,
      }),
      getReelTargetSymbol({
        distributions,
        index: reelThree,
        reel: 2,
        increment: 1,
      }),
    ]),
  ]);
  console.log(
    `${list.get(0).get(0)} ${list.get(1).get(0)} ${list.get(2).get(0)}`,
  );
  console.log(
    `${list.get(0).get(1)} ${list.get(1).get(1)} ${list.get(2).get(1)}`,
  );
  console.log(
    `${list.get(0).get(2)} ${list.get(1).get(2)} ${list.get(2).get(2)}`,
  );
  return list;
};

const getSymbol = (reels, reel, line) => reels.get(reel).get(line);

export const lineMatched = ({ reels, line }) =>
  getSymbol(reels, 0, line) === getSymbol(reels, 1, line) &&
  getSymbol(reels, 2, line) === getSymbol(reels, 1, line);

export const diagonalMatched = ({ reels }) =>
  (getSymbol(reels, 0, 0) === getSymbol(reels, 1, 1) &&
    getSymbol(reels, 1, 1) === getSymbol(reels, 2, 2)) ||
  (getSymbol(reels, 2, 0) === getSymbol(reels, 1, 1) &&
    getSymbol(reels, 1, 1) === getSymbol(reels, 0, 2));

export const calcEarnings = ({ finalValues: reels, symbols, bet }) => {
  const winners = List([
    lineMatched({ reels, line: 0 })
      ? symbols.get(reels.get(1).get(0))
      : Map({ payout: 0 }),
    lineMatched({ reels, line: 1 })
      ? symbols.get(reels.get(1).get(1))
      : Map({ payout: 0 }),
    lineMatched({ reels, line: 2 })
      ? symbols.get(reels.get(1).get(2))
      : Map({ payout: 0 }),
  ]);
  console.log(`${symbols.get(getSymbol(reels, 0, 1)).get('icon')}`);
  console.log(`${symbols.get(getSymbol(reels, 1, 1)).get('icon')}`);
  console.log(`${symbols.get(getSymbol(reels, 2, 1)).get('icon')}`);
  if (lineMatched({ reels, line: 0 })) {
    console.log('MATCH LINE ONE');
    console.log(symbols.get(getSymbol(reels, 1, 0)).get('icon'));
  }
  if (lineMatched({ reels, line: 1 })) {
    console.log('MATCH LINE TWO');
    console.log(symbols.get(getSymbol(reels, 1, 1)).get('icon'));
  }
  if (lineMatched({ reels, line: 2 })) {
    console.log('MATCH LINE THREE');
    console.log(symbols.get(getSymbol(reels, 1, 2)).get('icon'));
  }
  if (diagonalMatched({ reels })) {
    console.log('MATCH DIAGONAL');
    console.log(symbols.get(getSymbol(reels, 1, 1)).get('icon'));
  }
  let symbol;
  switch (bet) {
    case 1:
      return lineMatched({ reels, line: 1 })
        ? symbols.get(reels.get(1).get(1))
        : Map({ payout: 0 });
    case 2:
      symbol = winners.reduce(
        (curMax, current) =>
          curMax.get('payout') > current.get('payout') ? curMax : current,
      );
      return symbol;
    case 3:
      const fullWinners = winners.push(
        diagonalMatched({ reels })
          ? symbols.get(reels.get(1).get(1))
          : Map({ payout: 0 }),
      );
      symbol = fullWinners.reduce(
        (curMax, current) =>
          current && curMax.get('payout') > current.get('payout')
            ? curMax
            : current,
      );
      return symbol;
    default:
      return Map({ payout: 0 });
  }
};
