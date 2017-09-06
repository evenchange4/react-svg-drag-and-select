import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import Box from '../Box';
import ShapeItem from '../ShapeItem';

const INIT_STATE = {
  left: 0,
  top: 0,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

class SVGContainer extends React.PureComponent {
  static propTypes = {
    // SVG
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,

    items: PropTypes.array.isRequired,
    onSelectChange: PropTypes.func.isRequired,
    onItemsChange: PropTypes.func.isRequired,
    isMovable: PropTypes.bool.isRequired,
    isSelectable: PropTypes.bool.isRequired,
  };
  state = INIT_STATE;

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isSelectable) this.setState(INIT_STATE);
  }
  onMouseDown = e => {
    const { offsetLeft, offsetTop, x, y } = this.getPositionRelativeToSVG(e);
    this.x = x;
    this.y = y;
    this.setState({
      left: offsetLeft + x,
      top: offsetTop + y,
      x,
      y,
      width: 0,
      height: 0,
    });
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  };
  onMouseMove = e => {
    const { offsetLeft, offsetTop, x, y } = this.getPositionRelativeToSVG(e);
    const nextX = Math.min(x, this.x);
    const nexty = Math.min(y, this.y);
    this.setState({
      x: nextX,
      y: nexty,
      width: Math.abs(x - this.x),
      height: Math.abs(y - this.y),
      left: offsetLeft + nextX,
      top: offsetTop + nexty,
    });
  };
  onMouseUp = () => {
    this.x = null;
    this.y = null;
    // this.setState({ x: null, y: null, width: null, height: null })
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);

    const intersectIds = R.pipe(R.pickBy(val => !!val), R.keys)(
      this.state.isIntersect,
    );
    const selected = R.filter(item => R.contains(item.id, intersectIds))(
      this.props.items,
    );
    // console.log(selected)
    this.props.onSelectChange(selected);
  };

  onPositionChange = ({ id, ...others }) => {
    const updateXY = object => ({
      ...object,
      ...others,
    });
    const index = R.findIndex(R.propEq('id', id))(this.props.items);
    const items = R.adjust(updateXY, index)(this.props.items);
    // for (let i = 0; i <= items.length; i ++) {
    //   if (i === index) return;
    //   if (items[i].tagName === 'text') return;
    //   const intersections = intersect(
    //     shape(items[index].tagName, items[index]),
    //     shape(items[i].tagName, items[i]),
    //   );
    //   if (intersections.points.length > 0) return;
    //
    // }
    this.props.onItemsChange(items);
  };

  onIntersectChange = ({ id, isIntersect }) => {
    this.setState(state => ({
      isIntersect: {
        ...state.isIntersect,
        [id]: isIntersect,
      },
    }));
  };
  onRef = ref => {
    this.svg = ref;
  };
  getPositionRelativeToSVG = e => {
    const {
      left: offsetLeft,
      top: offsetTop,
    } = this.svg.getBoundingClientRect();
    const x = e.pageX - offsetLeft;
    const y = e.pageY - offsetTop;

    return { offsetLeft, offsetTop, x, y };
  };
  render() {
    const {
      onItemsChange,
      onSelectChange,
      isSelectable,
      isMovable,
      items,
      style,
      ...otherProps
    } = this.props;
    const { left, top, x, y, width, height } = this.state;
    const { onMouseDown, onPositionChange, onIntersectChange, onRef } = this;

    return (
      <svg
        ref={onRef}
        {...otherProps}
        style={{
          ...style,
          cursor: isSelectable ? 'crosshair' : 'auto',
        }}
        onMouseDown={isSelectable && onMouseDown}
      >
        {items.map(({ tagName, id, ...others }) => (
          <ShapeItem
            id={id}
            key={id}
            tagName={tagName}
            isMovable={isMovable}
            onPositionChange={onPositionChange}
            {...others}
            box={{ left, top, width, height }}
            onIntersectChange={onIntersectChange}
          />
        ))}
        <Box x={x} y={y} width={width} height={height} />
      </svg>
    );
  }
}

export default SVGContainer;
