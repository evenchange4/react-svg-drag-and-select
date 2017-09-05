import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ x, y, height, width, fill, ...otherProps }) => (
  <rect x={x} y={y} height={height} width={width} fill={fill} {...otherProps} />
);

Box.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string,
};

Box.defaultProps = {
  x: 0,
  y: 0,
  height: 0,
  width: 0,
  fill: 'rgba(0, 162, 255, 0.2)',
};

export default Box;
