/**
 * Each rect should be an object with parameters:
 * - x1, y1 - top left coordinates
 * - x2, y2 - bottom right coordinates
 */
function isIntersect(rectA, rectB) {
  // Helper function to validate incoming object
  function validateRect(shape) {
    // Validate incoming objects
    const mandatoryProps = ['x1', 'x2', 'y1', 'y2'];
    mandatoryProps.forEach(prop => {
      const val = shape[prop];
      if (val === undefined || val === null) {
        throw new Error('Provided rect doesn\'t have required params');
      }
      if (val < 0) {
        throw new Error('Provided rect coordinates must be positive');
      }
    });

    return true;
  }

  try {
    // 1. Validate rects
    validateRect(rectA);
    validateRect(rectB);

    // 2. Check intersection on x and y axises
    const xIntersect = Math.max(0, Math.min(rectA.x2, rectB.x2) - Math.max(rectA.x1, rectB.x1));
    const yIntersect = Math.max(0, Math.min(rectA.y2, rectB.y2) - Math.max(rectA.y1, rectB.y1));

    // 3. If both intersections are greater than 0 - rects are intersecting
    return xIntersect > 0 && yIntersect > 0;
  } catch (e) {
    console.log(e.message);

    return false;
  }
}

module.exports = {
  isIntersect
};

