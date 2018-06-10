import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { color, select } from '@storybook/addon-knobs';

import withTests from '../../../utils/withTests';
import { GRAPH } from '../../../../.storybook/sections';

import ComposedChart from '../ComposedChart';
import Area from '.';
import { generateRandomShifts } from '../utils';
import { SIZES } from '../../utils/constants';

storiesOf(`${GRAPH}Area`, module)
  .addDecorator(withTests('Area/tests/index'))
  .add(
    'Simple',
    withInfo()(() => (
      <ComposedChart data={generateRandomShifts()}>
        <Area
          dataKey="shifts"
          color={color('color', '#78EDA4')}
          bgColor={color('bgColor', '#76E6AC')}
          size={select('size', Object.values(SIZES), SIZES.xs)}
        />
      </ComposedChart>
    )),
  );
