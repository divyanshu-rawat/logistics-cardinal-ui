import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
// import { select } from '@storybook/addon-knobs';

// import withTests from '../../utils/withTests';

import { FORM } from '../../../.storybook/sections';

import InputFeedback from '.';

storiesOf(`${FORM}InputFeedback`, module)
  // .addDecorator(withTests('Input/tests/index'))
  .add(
    'Regular',
    withInfo()(() => <InputFeedback>Feedback is Awesome!</InputFeedback>),
  )
  .add(
    'Error',
    withInfo()(() => (
      <InputFeedback state="error">
        Please fill the required information.
      </InputFeedback>
    )),
  )
  .add(
    'Success',
    withInfo()(() => (
      <InputFeedback state="success">
        Please fill the required information.
      </InputFeedback>
    )),
  );
