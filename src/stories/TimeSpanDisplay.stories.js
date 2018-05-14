import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';

import withTests from './withTests';

import TimeSpanDisplay from '../components/TimeSpanDisplay';

storiesOf('TimeSpanDisplay', module)
  .addDecorator(withTests('index'))
  .addDecorator(centered)
  .add(
    'Normal',
    withInfo()(() => (
      <TimeSpanDisplay
        startAt="2017-12-01T10:00:00Z"
        endAt="2017-12-01T12:00:00Z"
      />
    ))
  )
  .add(
    'With seconds',
    withInfo()(() => (
      <TimeSpanDisplay
        startAt="2017-12-01T10:00:00Z"
        endAt="2017-12-01T12:00:00Z"
        withSeconds
      />
    ))
  );
