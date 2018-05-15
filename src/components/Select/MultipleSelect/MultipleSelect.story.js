import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';

import withTests from '../../../utils/withTests';

import { MultipleSelectMock } from '../../../utils/mocks';
import MultipleSelect from '.';

storiesOf('Select/MultipleSelect', module)
  .addDecorator(withTests('index'))
  .addDecorator(centered)
  .add(
    'Normal',
    withInfo()(() => (
      <MultipleSelect
        name="zones"
        onChange={action((item) => console.log(item))}
        options={MultipleSelectMock}
      />
    )),
  )
  .add(
    'With initial Values',
    withInfo()(() => (
      <MultipleSelect
        name="zones"
        initialValue={[{ value: 'stockholm$stockholm', label: 'Stockholm' }]}
        onChange={action((item) => console.log(item))}
        options={MultipleSelectMock}
      />
    )),
  );
