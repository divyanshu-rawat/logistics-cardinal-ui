import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { select, boolean } from '@storybook/addon-knobs';

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
      <div>
        <SingleSelect
          options={SingleSelectMock}
          isSearchable
          onChange={action((item) => console.log(item))}
          disabled={boolean('disabled', false)}
          validationState={select('Validation State', [
            '',
            'error',
            'success',
            'warning',
          ])}
          name="start_at"
          placeholder="Searchable Start At"
        />
        <SingleSelect
          options={SingleSelectMock}
          onChange={action((item) => console.log(item))}
          validationState={select('Validation State', [
            '',
            'error',
            'success',
            'warning',
          ])}
          name="end_at"
          placeholder="End At"
        />
      </div>
    )),
  )
  .add(
    'With initial Value',
    withInfo()(() => (
      <SingleSelect
        options={SingleSelectMock}
        onChange={action((item) => console.log(item))}
        initialValue="09:00:00"
        name="start_at"
        placeholder="Start At"
      />
    )),
  );
