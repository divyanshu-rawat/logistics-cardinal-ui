import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import withTests from '../../utils/withTests';
import { COMPONENTS } from '../../../.storybook/sections';

import TimeSpanDisplay from '.';

storiesOf(`${COMPONENTS}TimeSpanDisplay`, module)
  .addDecorator(withTests('TimeSpanDisplay/tests/index', 'Time'))
  .add(
    'Normal',
    withInfo()(() => (
      <TimeSpanDisplay
        startAt="2017-12-01T10:00:00Z"
        endAt="2017-12-01T12:00:00Z"
      />
    )),
  )
  .add(
    'With seconds',
    withInfo()(() => (
      <TimeSpanDisplay
        startAt="2017-12-01T10:00:00Z"
        endAt="2017-12-01T12:00:00Z"
        withSeconds
      />
    )),
  );
