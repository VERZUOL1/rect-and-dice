const { isIntersect } = require('./intersection');

describe('Is intersect', () => {
  const log = jest.spyOn(global.console, 'log');

  test('it should return boolean value', () => {
    const a = { x1: 1, y1: 1, x2: 10, y2: 10 };
    const b = { x1: 5, y1: 5, x2: 15, y2: 15 };

    expect(typeof isIntersect(a, b)).toBe('boolean');
  });

  test('it should return true if incoming rects are intersecting', () => {
    const a = { x1: 1, y1: 1, x2: 10, y2: 10 };
    const b = { x1: 5, y1: 5, x2: 15, y2: 15 };

    expect(isIntersect(a, b)).toBe(true);
  });

  test('it should return false if incoming rects are not intersecting', () => {
    const a = { x1: 1, y1: 1, x2: 10, y2: 10 };
    const b = { x1: 15, y1: 15, x2: 25, y2: 25 };

    expect(isIntersect(a, b)).toBe(false);
  });

  test('it should return false and display error in console if if incoming rects does not have required props', () => {
    const a = { x1: 1, y1: 1, y2: 10 };
    const b = { x1: 2, x2: 2, y2: 5 };
    const result = isIntersect(a, b);

    expect(result).toBe(false);
    expect(log).toHaveBeenCalledWith('Provided rect doesn\'t have required params');
  });

  test('it should return falseand display an error in console if provided rects has negative coordinates', () => {
    const a = { x1: -2, y1: 2, x2: 2, y2: -1 };
    const b = { x1: 1, y1: 1, x2: 5, y2: -2 };
    const result = isIntersect(a, b);

    expect(result).toBe(false);
    expect(log).toHaveBeenCalledWith('Provided rect coordinates must be positive');
  });
});
