import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { color, boolean, select, number } from '@storybook/addon-knobs';

import { FORM } from '../../../.storybook/sections';

// import withTests from '../../utils/withTests';
// import { rooster } from '../../themes';

import { TextArea } from '.';

storiesOf(`${FORM}TextArea`, module)
  // .addDecorator(withTests('Text/tests/index', 'TextStyled'))
  .add(
    'Simple',
    withInfo()(() => (
      <div style={{ width: '500px' }}>
        <TextArea placeholder="... ... ..." />
      </div>
    )),
  );
