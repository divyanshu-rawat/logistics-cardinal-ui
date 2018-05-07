import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';

import { TimeOptionsMock } from './utils';
import withTests from './withTests';
import withBackground from './withBackground';

import Timepicker from '../components/PeriodSelector/Timepicker';

storiesOf('Timepicker', module)
  .addDecorator(withTests('index'))
  .addDecorator(withBackground)
  .addDecorator(centered)
  .add(
    'Single',
    withInfo()(() => (
      <Timepicker
        options={TimeOptionsMock}
        onChange={action((item) => console.log(item))}
        name="start_at"
        placeholder="Start At"
      />
    ))
  )
  .add(
    'With initial Value',
    withInfo()(() => (
      <Timepicker
        options={TimeOptionsMock}
        onChange={action((item) => console.log(item))}
        value={{ label: '09:00', value: '09:00:00' }}
        name="start_at"
        placeholder="Start At"
      />
    ))
  );
