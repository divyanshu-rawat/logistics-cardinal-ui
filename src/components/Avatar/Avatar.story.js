import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import { COMPONENTS } from '../../../.storybook/sections';

import Avatar from '.';

storiesOf(`${COMPONENTS}Avatar`, module)
  .addDecorator(withTests('Avatar/tests/index', 'Avatar/tests/AvatarStyled'))
  .add(
    'Simple',
    withInfo()(() => (
      <Avatar size={select('size', ['sm', 'md', 'lg'], 'md')} />
    )),
  );
