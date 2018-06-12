import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object } from '@storybook/addon-knobs';

import withTests from '../../../utils/withTests';
import { GRAPH } from '../../../../.storybook/sections';

import ComposedChart from '../ComposedChart';
import Area from '../Area';
import LinearGradient from '.';
import { generateRandomShifts } from '../utils';
import { SIZES } from '../../utils/constants';

storiesOf(`${GRAPH}LinearGradient`, module)
  .addDecorator(withTests('LinearGradient/tests/index'))
  .add(
    'Simple',
    withInfo()(() => {
      const stops = [
        {
          offset: '5%',
          stopColor: '#daa357',
          stopOpacity: 0.8,
        },
        {
          offset: '95%',
          stopColor: 'rgb(219,112,147)',
          stopOpacity: 0,
        },
      ];

      return (
        <Fragment>
          <LinearGradient id="gradient" stops={object('stops', stops)} />
          <ComposedChart data={generateRandomShifts()}>
            <Area
              dataKey="shifts"
              color="#daa357"
              bgColor="url(#gradient)"
              size={SIZES.xs}
            />
          </ComposedChart>
        </Fragment>
      );
    }),
  );
