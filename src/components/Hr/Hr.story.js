import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import withTests from '../../utils/withTests';

import { COMPONENTS } from '../../../.storybook/sections';

import { Hr } from '.';

storiesOf(`${COMPONENTS}Hr`, module)
  .addDecorator(withTests('Hr/tests/Hr'))
  .add(
    'Regular',
    withInfo()(() => (
      <div
        style={{
          background: '#343A42',
          padding: '20px',
          width: '500px',
        }}
      >
        <Hr />
      </div>
    )),
  );
