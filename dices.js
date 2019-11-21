/**
 * Dice object
 * @type {{roll: (function(): number)}}
 */
const DICE = {
  roll: () => Math.floor(Math.random() * 6) + 1
};

/**
 * Throws 2 dices
 */
const throwDices = () => {
  return DICE.roll() + DICE.roll();
};

/**
 * Calculates profit depending on bet and dices result
 * @param bet
 * @param sum
 * @returns {number|*}
 */
const getGameResult = (bet, sum) => {
  switch (sum) {
    case 12: {
      return bet * 4;
    }
    case 11: {
      return bet * 3;
    }
    case 10: {
      return bet * 2;
    }
    case 7:
    case 8:
    case 9: {
      return bet;
    }
    default: {
      return 0;
    }
  }
};

/**
 * Simulate singe dices game
 * @param bet
 * @returns {number|*}
 */
const playTheGame = bet => {
  const sum = throwDices();
  return getGameResult(bet, sum);
};

/**
 * Returns total result after certain amount of game runs
 * @param debt
 * @param bet
 * @param iterations
 * @returns {*}
 */
const getMyChance = (debt, bet, iterations) => {
  let totalDebt = debt;
  for(let i = 0; i < iterations; i++) {
    totalDebt -= bet;
    totalDebt += playTheGame(bet);
  }

  return totalDebt;
};

const shouldIPlay = (debt, bet, iterations) => {
  return getMyChance(debt, bet, iterations) > debt;
};

const decision = shouldIPlay(0.5, 0.5, 1000);
console.log(`I will ${decision ? 'win' : 'loose'} this game if I play 1000 times`);

module.exports = {
  shouldIPlay,
  getMyChance,
  getGameResult
};

