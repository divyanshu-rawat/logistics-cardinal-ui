import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
// import { select } from '@storybook/addon-knobs';

// import withTests from '../../utils/withTests';

import { FORM } from '../../../.storybook/sections';

import InputGroup from '.';
import InputFeedback from '../InputFeedback';
import Input from '../Input';
import Label from '../Label';

storiesOf(`${FORM}InputGroup`, module)
  // .addDecorator(withTests('Input/tests/index'))
  .add(
    'Regular',
    withInfo()(() => (
      <InputGroup>
        <Label>First name</Label>
        <Input />
        <InputFeedback>Please fill in your first name...</InputFeedback>
      </InputGroup>
    )),
  )
  .add(
    'With Error',
    withInfo()(() => (
      <InputGroup name="firstName">
        <Label htmlFor="firstName">First name</Label>
        <Input id="firstName" hasError />
        <InputFeedback state="error">Invalid name :(</InputFeedback>
      </InputGroup>
    )),
  )
  .add(
    'Disabled',
    withInfo()(() => (
      <InputGroup name="firstName" disabled>
        <Label htmlFor="firstName">First name</Label>
        <Input id="firstName" />
      </InputGroup>
    )),
  );
