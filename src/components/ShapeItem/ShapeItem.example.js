import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Box from '../Box';
import ShapeItem from '.';

storiesOf('ShapeItem', module).add(
  'API',
  withInfo({
    text: 'ShapeItem with Box',
    inline: true,
    propTables: [ShapeItem],
  })(() => (
    <svg
      width={200}
      height={200}
      viewBox="0 0 200 200"
      style={{ border: '1px solid black' }}
    >
      <Box x={50} y={50} width={100} height={100} />
      <ShapeItem
        tagName="rect"
        id="id"
        isMovable="true"
        onPositionChange={() => {}}
        box={{
          width: 100,
          height: 100,
          left: 50,
          top: 50,
        }}
        onIntersectChange={() => {}}
        x={10}
        y={10}
        width={100}
        height={100}
        fill={'brown'}
      />
    </svg>
  )),
);
