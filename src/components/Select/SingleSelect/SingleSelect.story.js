import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';

import { SingleSelectMock } from '../../../utils/mocks';
import withTests from '../../../utils/withTests';

import SingleSelect from '.';

storiesOf('Select/SingleSelect', module)
  .addDecorator(
    withTests('Select/SingleSelect/tests/index', 'Select/tests/index'),
  )
  .addDecorator(centered)
  .add(
    'Single',
    withInfo()(() => (
      <SingleSelect
        options={SingleSelectMock}
        onChange={action((item) => console.log(item))}
        name="start_at"
        placeholder="Start At"
      />
    )),
  )
  .add(
    'With initial Value',
    withInfo()(() => (
      <SingleSelect
        options={SingleSelectMock}
        onChange={action((item) => console.log(item))}
        initialValue={{ label: '09:00', value: '09:00:00' }}
        name="start_at"
        placeholder="Start At"
      />
    )),
  );
