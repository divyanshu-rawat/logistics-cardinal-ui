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

// 10 % || - 10 %
export const PERGENTAGE_MASK = createNumberMask({
  prefix: '',
  includeThousandsSeparator: false,
  suffix: ' %',
  allowNegative: true,
});

// $ 10
export const MONEY_MASK = createNumberMask();

// rick@c137.com
export const EMAIL_MASK = emailMask;
