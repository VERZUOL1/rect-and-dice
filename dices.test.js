const { shouldIPlay, getGameResult } = require('./dices');

describe('shouldIPlay', () => {
  test('it should return false if 0 iterations were provided', () => {
    expect(shouldIPlay(0.50, 0)).toEqual(false);
  });

  test('it should boolean value', () => {
    expect(typeof shouldIPlay(0.50, 10)).toBe('boolean');
  });
});

describe('getGameResult', () => {
  test('it should return 4x bet if sum is equal to 12', () => {
    expect(getGameResult(0.50, 12)).toEqual(2);
  });
  test('it should return 3x bet if sum is equal to 11', () => {
    expect(getGameResult(0.50, 11)).toEqual(1.5);
  });
  test('it should return 2x bet if sum is equal to 10', () => {
    expect(getGameResult(0.50, 10)).toEqual(1);
  });
  test('it should return bet if sum is equal to 7, 8, 9', () => {
    expect(getGameResult(0.50, 7)).toEqual(0.5);
    expect(getGameResult(0.50, 8)).toEqual(0.5);
    expect(getGameResult(0.50, 9)).toEqual(0.5);
  });
  test('it should return -bet if sum is equal to 2, 3, 4, 5, 6', () => {
    expect(getGameResult(0.50, 2)).toEqual(0);
    expect(getGameResult(0.50, 3)).toEqual(0);
    expect(getGameResult(0.50, 4)).toEqual(0);
    expect(getGameResult(0.50, 5)).toEqual(0);
    expect(getGameResult(0.50, 6)).toEqual(0);
  });
});
