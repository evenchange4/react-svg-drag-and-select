import R from 'ramda';

// (props, { x, y }) => nextProps
const mapShapePropsByDiff = (props, diff) =>
  R.cond([
    [
      R.equals('circle'),
      R.always({
        cx: props.cx + diff.x,
        cy: props.cy + diff.y,
      }),
    ],
    [
      R.equals('polygon'),
      () => ({
        points: props.points
          .split(' ')
          .map(point => {
            const [x, y] = point.split(',');
            return `${Number(x) + diff.x},${Number(y) + diff.y}`;
          })
          .join(' '),
      }),
    ],
    [
      R.T,
      R.always({
        x: props.x + diff.x,
        y: props.y + diff.y,
      }),
    ],
  ])(props.tagName);

export default mapShapePropsByDiff;
