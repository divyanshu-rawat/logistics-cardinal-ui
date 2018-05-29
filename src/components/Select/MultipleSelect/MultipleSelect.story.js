import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import withTests from '../../../utils/withTests';
import { FORM } from '../../../../.storybook/sections';

import { MultipleSelectMock } from '../../../utils/mocks';
import MultipleSelect from '.';

storiesOf(`${FORM}Select/MultipleSelect`, module)
  .addDecorator(
    withTests('Select/MultipleSelect/tests/index', 'Select/tests/index'),
  )
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
