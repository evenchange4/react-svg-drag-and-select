import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Box from '.';

storiesOf('Box', module).add(
  'API',
  withInfo({
    text: 'Box in svg',
    inline: true,
  })(() => (
    <svg viewbox="0 0 200 200" style={{ border: '1px solid black' }}>
      <Box x={0} y={0} width={100} height={100} />
    </svg>
  )),
);
