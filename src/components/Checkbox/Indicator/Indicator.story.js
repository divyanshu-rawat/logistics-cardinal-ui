import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { color } from '@storybook/addon-knobs';

import withTests from '../../../utils/withTests';

import { FORM } from '../../../../.storybook/sections';

import Indicator from '.';

storiesOf(`${FORM}Checkbox/Indicator`, module)
  .addDecorator(
    withTests(
      'Checkbox/tests/index',
      'Indicator/tests/index',
      'Indicator/tests/IndicatorStyled',
    ),
  )
  .add(
    'Simple',
    withInfo()(() => (
      <Indicator
        label="My super checkbox!"
        onChange={action((item) => console.log(item))}
        id="some-nice-id"
        name="myCheckbox"
        color={color('color', '#2f903e')}
      />
    )),
  );
