import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { SingleSelectMock } from '../../../utils/mocks';
import withTests from '../../../utils/withTests';

import { FORM } from '../../../../.storybook/sections';

import SingleSelect from '.';

storiesOf(`${FORM}Select/SingleSelect`, module)
  .addDecorator(
    withTests('Select/SingleSelect/tests/index', 'Select/tests/index'),
  )
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
