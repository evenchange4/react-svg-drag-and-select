import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Box from '.';

storiesOf('Box', module)
  .add(
    'API',
    withInfo({
      text: 'anchor A',
      inline: true,
    })(() =>
      <svg viewbox="0 0 200 200">
        <Box x={0} y={0} width={100} height={100} />
      </svg>
    ),
  );
