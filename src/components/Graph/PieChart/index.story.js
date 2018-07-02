import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Cell } from 'recharts';

import withTests from '../../../utils/withTests';
import { GRAPH } from '../../../../.storybook/sections';

import Pie from '../Pie';
import PieChart from '.';
import { SIZES } from '../../utils/constants';

storiesOf(`${GRAPH}PieChart`, module)
  .addDecorator(withTests('PieChart/tests/index'))
  .add(
    'Simple',
    withInfo()(() => (
      <PieChart width={400} height={400}>
        <Pie
          data={[{ value: 30 }, { value: 20 }, { value: 15 }]}
          dataKey="value"
          innerRadiusSize={SIZES.xs}
          outerRadiusSize={SIZES.lg}
        >
          <Cell key="CellOne" fill="rgba(79, 127, 177, 0.3)" stroke="#4f7fb1" />
          <Cell key="CellTwo" fill="rgba(109,179,36,0.3)" stroke="#6DB324" />
          <Cell key="CellThree" fill="#662147" stroke="#E6499F" />
        </Pie>
      </PieChart>
    )),
  );
