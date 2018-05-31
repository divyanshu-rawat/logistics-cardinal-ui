import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import { FORM } from '../../../.storybook/sections';

import MaskedInput from '.';
import {
  BIRTHDAY_MASK,
  PERGENTAGE_MASK,
  MONEY_MASK,
  EMAIL_MASK,
} from './constants';

const maskOptions = ['birthday', 'percentage', 'currency', 'email'];
const masks = {
  birthday: {
    id: 'birthday',
    mask: BIRTHDAY_MASK,
    placeholder: 'DD.MM.YYYY',
    guide: true,
  },
  percentage: {
    id: 'percentage',
    mask: PERGENTAGE_MASK,
    placeholder: '%',
    guide: false,
  },
  currency: {
    id: 'currency',
    mask: MONEY_MASK,
    placeholder: '$',
    guide: false,
  },
  email: {
    id: 'email',
    mask: EMAIL_MASK,
    placeholder: 'rick@c137.com',
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
          onChange={(data) => console.log(data)}
          placeholder={masks[selectedOption].placeholder}
        />
      );
    }),
  );
