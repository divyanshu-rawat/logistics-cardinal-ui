import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
// import { select } from '@storybook/addon-knobs';

// import withTests from '../../utils/withTests';

import { FORM } from '../../../.storybook/sections';

import Label from '.';

storiesOf(`${FORM}Label`, module)
  // .addDecorator(withTests('Input/tests/index'))
  .add(
    'Regular',
    withInfo()(() => <Label htmlFor="awesomeLabel">My Awesome Label</Label>),
  )
  .add(
    'With Error',
    withInfo()(() => (
      <Label htmlFor="awesomeLabel" hasError>
        My Awesome Label
      </Label>
    )),
  );
