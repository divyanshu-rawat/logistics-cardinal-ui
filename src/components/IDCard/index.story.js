import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import withTests from '../../utils/withTests';

import { COMPONENTS } from '../../../.storybook/sections';

import IDCard from '.';

storiesOf(`${COMPONENTS}IDCard`, module)
  .addDecorator(withTests('IDCard/tests/index', 'IDCard/tests/IDCardStyled'))
  .add(
    'Simple',
    withInfo()(() => <IDCard name="Teri Mitchell" info="Rider Captain" />),
  );
