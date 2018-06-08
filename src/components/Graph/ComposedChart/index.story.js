import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';
import { CartesianGrid, Legend, XAxis, YAxis } from 'recharts';

import withTests from '../../../utils/withTests';
import { GRAPH } from '../../../../.storybook/sections';

import Line from '../Line';
import ComposedChart from '.';
import { generateRandomShifts } from '../utils';
import { SIZES } from '../../utils/constants';

storiesOf(`${GRAPH}ComposedChart`, module)
  .addDecorator(withTests('ComposedChart/tests/index'))
  .add(
    'Simple',
    withInfo()(() => (
      <ComposedChart
        marginSize={select('marginSize', Object.values(SIZES), SIZES.xs)}
        data={generateRandomShifts()}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Line dataKey="shifts" />
      </ComposedChart>
    )),
  );
