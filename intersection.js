/**
 * Each rect should be an object with parameters:
 * - x1, y1 - top left coordinates
 * - x2, y2 - bottom right coordinates
 */
function isIntersect(rectA, rectB) {
  // Helper function to prepare incoming object
  function getRect(shape) {
    // Validate incoming objects
    const mandatoryProps = ['x1', 'x2', 'y1', 'y2'];
    mandatoryProps.forEach(prop => {
      const val = shape[prop];
      if (val === undefined || val === null) {
        throw new Error('Provided rect doesn\'t have required params');
      }
    });

    // Transform coordinates to positive numbers so we can easily calculate intersection by coordinates
    return {
      left: Math.abs(shape.x1),
      right: Math.abs(shape.x1) + Math.abs(shape.x2),
      top: Math.abs(shape.y1),
      bottom: Math.abs(shape.y1) + Math.abs(shape.y2)
    };
  }

  try {
    // 1. Prepare rects
    const a = getRect(rectA);
    const b = getRect(rectB);

    // 2. Check intersection on x and y axises
    const xIntersect = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
    const yIntersect = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));

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

