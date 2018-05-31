import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import { FORM } from '../../../.storybook/sections';

import Input from '.';

storiesOf(`${FORM}Input`, module)
  .addDecorator(withTests('Input/tests/index'))
  .add('Simple', withInfo()(() => <Input placeholder="Awesome Placeholder" />));
