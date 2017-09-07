module Box (box) where

import Prelude hiding (div)
import React (ReactClass, getProps, spec, createClass)
import React.DOM.SVG.Dynamic (rect)
import React.DOM.Props (style, height, width, x, y)

type BoxProps r = { x :: Int
                  , y :: Int
                  , height :: String
                  , width :: String
                  | r
                  }

box :: forall props. ReactClass (BoxProps props)
box = createClass $ spec unit \ctx -> do
  props <- getProps ctx

  let ui = rect [ style { fill: "rgba(0, 162, 255, 0.2)"
                        }
                , height props.height
                , width props.width
                , x props.x
                , y props.y
                ] [ ]

  pure ui

-- const Box = ({ x, y, height, width, fill, ...otherProps }) => (
--   <rect x={x} y={y} height={height} width={width} fill={fill} {...otherProps} />
-- );
--
-- Box.propTypes = {
--   x: PropTypes.number,
--   y: PropTypes.number,
--   height: PropTypes.number,
--   width: PropTypes.number,
--   fill: PropTypes.string,
-- };
--
-- Box.defaultProps = {
--   x: 0,
--   y: 0,
--   height: 0,
--   width: 0,
--   fill: 'rgba(0, 162, 255, 0.2)',
-- };
