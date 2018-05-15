import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';

import { SingleSelectMock } from '../../../../utils/mocks';
import withTests from '../../../../utils/withTests';

import PeriodSelector from '..';

storiesOf('PeriodSelector', module)
  .addDecorator(withTests('index'))
  .addDecorator(centered)
  .add(
    'StartAt and EndAt',
    withInfo()(() => (
      <PeriodSelector
        options={SingleSelectMock}
        onChange={action((item) => console.log(item))}
        names={['start_at', 'end_at']}
        placeholders={['Start At', 'End At']}
        initialValues={[]}
      />
    )),
  )
  .add(
    'With Initial Values',
    withInfo()(() => (
      <PeriodSelector
        options={SingleSelectMock}
        onChange={action((item) => console.log(item))}
        names={['start_at', 'end_at']}
        placeholders={['Start At', 'End At']}
        initialValues={['09:00:00', '18:00:00']}
      />
    )),
  );
