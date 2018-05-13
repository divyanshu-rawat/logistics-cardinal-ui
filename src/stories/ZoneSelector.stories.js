import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';

import withTests from './withTests';

import { ZoneOptionsMock } from './utils';
import ZoneSelector from '../components/ZoneSelector';

storiesOf('Select', module)
  .addDecorator(withTests('index'))
  .addDecorator(centered)
  .add(
    'Normal',
    withInfo()(() => (
      <ZoneSelector
        name="zones"
        onChangeZone={action((item) => console.log(item))}
        options={ZoneOptionsMock}
      />
    ))
  )
  .add(
    'With initial Values',
    withInfo()(() => (
      <ZoneSelector
        name="zones"
        initialValue={[{ value: 'stockholm$stockholm', label: 'Stockholm' }]}
        onChangeZone={action((item) => console.log(item))}
        options={ZoneOptionsMock}
      />
    ))
  );
