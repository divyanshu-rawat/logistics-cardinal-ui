import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select, boolean } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import { FORM } from '../../../.storybook/sections';

import MaskedInput from '.';
import { MASKS } from '../..';

const maskOptions = [
  'birthday',
  'percentage',
  'currency',
  'email',
  'time',
  'decimal',
];
const masks = {
  birthday: {
    id: 'birthday',
    mask: MASKS.BIRTHDAY_MASK,
    placeholder: 'DD.MM.YYYY',
    guide: true,
  },
  percentage: {
    id: 'percentage',
    mask: MASKS.PERCENTAGE_MASK,
    placeholder: '%',
    guide: false,
  },
  time: {
    id: 'time',
    mask: MASKS.TIME_MASK,
    placeholder: 'HH:MM',
    guide: true,
  },
  currency: {
    id: 'currency',
    mask: MASKS.MONEY_MASK,
    placeholder: '$',
    guide: false,
  },
  email: {
    id: 'email',
    mask: MASKS.EMAIL_MASK,
    placeholder: 'rick@c137.com',
    guide: true,
  },
  decimal: {
    id: 'decimal',
    mask: MASKS.DECIMAL_MASK,
    placeholder: '10.20',
    guide: true,
  },
};

storiesOf(`${FORM}MaskedInput`, module)
  .addDecorator(withTests('MaskedInput/tests/index'))
  .add(
    'Simple',
    withInfo()(() => {
      const selectedOption = select('select mask', maskOptions, 'birthday');

      return (
        <MaskedInput
          mask={masks[selectedOption].mask}
          id={masks[selectedOption].id}
          guide={masks[selectedOption].guide}
          disabled={boolean('disabled?', false)}
          onChange={(data) => console.log(data)}
          placeholder={masks[selectedOption].placeholder}
        />
      );
    }),
  );
