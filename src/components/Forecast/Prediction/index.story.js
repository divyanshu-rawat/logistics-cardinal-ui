import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import withTests from '../../../utils/withTests';

import { PredictionMock } from '../../../utils/mocks';

import Prediction from './index';

storiesOf('Forecast/Prediction', module)
  .addDecorator(
    withTests(
      'Prediction/tests/index',
      'Percentage/tests/index',
      'Cell/tests/index',
      'Cell/tests/CellStyled',
    ),
  )
  .addDecorator(centered)
  .addDecorator(withKnobs)
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
