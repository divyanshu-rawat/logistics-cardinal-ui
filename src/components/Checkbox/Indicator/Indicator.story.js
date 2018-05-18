import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { withKnobs, color } from '@storybook/addon-knobs';

import withTests from '../../../utils/withTests';

import Indicator from '.';

storiesOf('Checkbox/Indicator', module)
  .addDecorator(withTests('index'))
  .addDecorator(withKnobs)
  .addDecorator(centered)
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