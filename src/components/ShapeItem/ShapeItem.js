// ref: https://codepen.io/techniq/pen/yVEeOx

import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import mapShapePropsByDiff from '../../utils/mapShapePropsByDiff';

// https://silentmatt.com/rectangle-intersection/
const checkIntersect = (A, box, tagName) => {
  if (tagName === 'text') return false;

  return (
    A.left < box.left + box.width &&
    A.left + A.width > box.left &&
    A.top < box.top + box.height &&
    A.top + A.height > box.top
  );
};

class ShapeItem extends React.PureComponent {
  static propTypes = {
    tagName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isMovable: PropTypes.bool.isRequired,
    onPositionChange: PropTypes.func.isRequired,
    box: PropTypes.shape({
      width: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
    }).isRequired,
    onIntersectChange: PropTypes.func.isRequired,
    style: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = { isIntersect: false };
  }
  componentDidMount = () => {
    // TODO: WHY setTimeout? for Splunk
    setTimeout(() => {
      this.updatePosition();
      this.checkIntersect(this.props);
    }, 200);
    document.addEventListener('scroll', this.updatePosition);
  };
  componentWillReceiveProps = nextProps => {
    if (!R.equals(nextProps.box, this.props.box)) {
      this.checkIntersect(nextProps);
    }
  };
  onMouseDown = e => {
    this.x = e.pageX;
    this.y = e.pageY;
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  };
  onMouseMove = e => {
    // Diff calculate
    const xDiff = e.pageX - this.x;
    const yDiff = e.pageY - this.y;

    // Move
    this.props.onPositionChange({
      id: this.props.id,
      ...mapShapePropsByDiff(this.props, { x: xDiff, y: yDiff }),
    });

    // next
    this.x = e.pageX;
    this.y = e.pageY;
  };
  onMouseUp = () => {
    this.x = null;
    this.y = null;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    this.updatePosition();
  };

  onRef = ref => {
    this.component = ref;
  };
  componentWillUnMount = () => {
    document.removeEventListener('scroll', this.updatePosition);
  };
  updatePosition = () => {
    this.clientRect =
      this.component &&
      this.component.getBoundingClientRect &&
      this.component.getBoundingClientRect();
  };
  checkIntersect = props => {
    const isIntersect = checkIntersect(
      this.clientRect,
      props.box,
      this.props.tagName,
    );
    this.setState({ isIntersect });
    this.props.onIntersectChange({ id: props.id, isIntersect });
  };
  render() {
    const {
      // omit
      box,
      onPositionChange,
      onIntersectChange,

      tagName: Component,
      isMovable,
      style,
      ...otherProps
    } = this.props;
    const { onMouseDown, onRef } = this;
    const { isIntersect } = this.state;

    return (
      <Component
        ref={onRef}
        style={{
          ...style,
          cursor: isMovable ? 'move' : 'crosshair',
          userSelect: 'none',
        }}
        fillOpacity={isIntersect ? 0.3 : 1}
        onMouseDown={isMovable ? onMouseDown : null}
        {...otherProps}
      />
    );
  }
}

export default ShapeItem;
