import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { number } from '@storybook/addon-knobs';

import withTests from '../../../utils/withTests';
import { PredictionMock } from '../../../utils/mocks';

import { COMPONENTS } from '../../../../.storybook/sections';

import Prediction from './index';

storiesOf(`${COMPONENTS}Forecast/Prediction`, module)
  .addDecorator(
    withTests(
      'Prediction/tests/index',
      'Percentage/tests/index',
      'Cell/tests/index',
      'Cell/tests/CellStyled',
    ),
  )
  .add(
    'with Forecast',
    withInfo()(() => (
      <div style={{ width: `${number('container width', 300)}px` }}>
        <Prediction
          {...PredictionMock[0]}
          total={number('total for the day', PredictionMock[0].total)}
          totalOfTheWeek={number(
            'total for the week',
            PredictionMock[0].totalOfTheWeek,
          )}
        />
      </div>
    )),
  )
  .add(
    'with Actual',
    withInfo()(() => (
      <div
        style={{
          width: `${number('container width', 300)}px`,
          border: '1px solid #444',
        }}
      >
        <Prediction
          {...PredictionMock[1]}
          total={number('total for the day', PredictionMock[1].total)}
          totalOfTheWeek={number(
            'total for the week',
            PredictionMock[1].totalOfTheWeek,
          )}
        />
      </div>
    )),
  );
