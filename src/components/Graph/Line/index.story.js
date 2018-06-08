import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, color, select } from '@storybook/addon-knobs';

import withTests from '../../../utils/withTests';
import { GRAPH } from '../../../../.storybook/sections';

import ComposedChart from '../ComposedChart';
import Line from '.';
import { generateRandomShifts } from '../utils';
import { SIZES } from '../../utils/constants';

storiesOf(`${GRAPH}Line`, module)
  .addDecorator(withTests('Line/tests/index'))
  .add(
    'Simple',
    withInfo()(() => (
      <ComposedChart data={generateRandomShifts()}>
        <Line
          dataKey="shifts"
          dash={boolean('dash', true)}
          dot={boolean('dot', true)}
          color={color('color', 'chocolate')}
          size={select('size', Object.values(SIZES), SIZES.xs)}
        />
      </ComposedChart>
    )),
  );
