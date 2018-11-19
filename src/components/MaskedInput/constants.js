import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import emailMask from 'text-mask-addons/dist/emailMask';

// DD.MM.YYYY
export const BIRTHDAY_MASK = [
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

// HH:mm
export const TIME_MASK = [/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/];

// 10 % || - 10 %
export const PERCENTAGE_MASK = createNumberMask({
  prefix: '',
  includeThousandsSeparator: false,
  suffix: ' %',
  allowNegative: true,
});

// $ 10
export const MONEY_MASK = createNumberMask();

// rick@c137.com
export const EMAIL_MASK = emailMask;

// 10.29
export const DECIMAL_MASK = createNumberMask({
  prefix: '',
  allowDecimal: true,
  requireDecimal: true,
});

export default {
  BIRTHDAY_MASK,
  MONEY_MASK,
  EMAIL_MASK,
  DECIMAL_MASK,
  PERCENTAGE_MASK,
};
