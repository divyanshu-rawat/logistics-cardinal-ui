import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import { FORM } from '../../../.storybook/sections';

import Switch from '.';
import Text from '../Text';
import { rooster } from '../../themes';

storiesOf(`${FORM}Switch`, module)
  .addDecorator(withTests('Switch/tests/index', 'Switch/tests/SwitchStyled'))
  .add(
    'Simple',
    withInfo()(() => (
      <Switch
        theme={rooster}
        initialValue={false}
        onChangeStatus={action((item) => console.log(item))}
      />
    )),
  )
  .add(
    'With Label',
    withInfo()(() => (
      <Switch
        initialValue={false}
        theme={rooster}
        id="myAwesomeSwitch"
        labelText={(active) =>
          active ? (
            <Text margin="0">The switch is on.</Text>
          ) : (
            <Text margin="0">The switch is off.</Text>
          )
        }
        onChangeStatus={action((item) => console.log(item))}
      />
    )),
  )
  .add(
    'With initial value',
    withInfo()(() => (
      <Switch
        theme={rooster}
        initialValue
        onChangeStatus={action((item) => console.log(item))}
      />
    )),
  )
  .add(
    'Disabled',
    withInfo()(() => (
      <Switch
        theme={rooster}
        initialValue
        disabled={boolean('disabled', true)}
        onChangeStatus={action((item) => console.log(item))}
      />
    )),
  )
  .add(
    'Size small',
    withInfo()(() => (
      <Switch
        theme={rooster}
        initialValue
        size="sm"
        onChangeStatus={action((item) => console.log(item))}
      />
    )),
  )
  .add(
    'Size medium',
    withInfo()(() => (
      <Switch
        theme={rooster}
        initialValue
        size="md"
        onChangeStatus={action((item) => console.log(item))}
      />
    )),
  )
  .add(
    'Size large',
    withInfo()(() => (
      <Switch
        initialValue
        theme={rooster}
        size="lg"
        onChangeStatus={action((item) => console.log(item))}
      />
    )),
  );
