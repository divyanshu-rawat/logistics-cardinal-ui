import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { TYPOGRAPHY } from '../../../.storybook/sections';

import Icons from '.';

const SIZE = 100;

storiesOf(`${TYPOGRAPHY}Icons`, module)
  .add(
    'ArrowRight',
    withInfo()(() => <Icons.ArrowRight width={SIZE} height={SIZE} />),
  )
  .add('Error', withInfo()(() => <Icons.Error width={SIZE} height={SIZE} />))
  .add(
    'Success',
    withInfo()(() => <Icons.Success width={SIZE} height={SIZE} />),
  )
  .add(
    'ChevronUp',
    withInfo()(() => <Icons.ChevronUp width={SIZE} height={SIZE} />),
  )
  .add(
    'ChevronDown',
    withInfo()(() => <Icons.ChevronDown width={SIZE} height={SIZE} />),
  )
  .add(
    'Calendar',
    withInfo()(() => <Icons.Calendar width={SIZE} height={SIZE} />),
  )
  .add('Close', withInfo()(() => <Icons.Close width={SIZE} height={SIZE} />));
