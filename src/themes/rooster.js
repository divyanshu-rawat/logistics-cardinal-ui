const white = '#fff';
const black = '#000';

const primary = {
  primary100: '#3f9bfd',
  primary200: '#375f8a',
  primary300: '#324e70',
  primary400: '#96a2b0',
  primary500: '#484e58',
};

const greys = {
  grey100: '#96a2b0',
  grey200: '#3f454d',
  grey300: '#343a42',
  grey400: '#292d33',
  grey500: '#40464f',
};

const greens = {
  green100: '#c6e5cb',
  green300: '#97e2a3',
  green500: '#62de76',
  green700: '#49b85b',
  green900: '#2f903e',
};

const reds = {
  red100: '#ffe6e1',
  red300: '#ffaf9f',
  red500: '#ff7559',
  red700: '#d55a41',
  red900: '#a94442',
};

const yellows = {
  yellow100: '#f2e5cb',
  yellow300: '#f7da9f',
  yellow500: '#ffc859',
  yellow700: '#d4a546',
  yellow900: '#ab8433',
};

const misc = {
  bodyBackground: greys.grey400,
  mainBackground: '343941',
  textColor: white,
  danger: reds.red900,
  success: greens.green700,
  warning: yellows.yellow700,
};

const colors = {
  white,
  black,
  ...primary,
  ...greys,
  ...greens,
  ...reds,
  ...yellows,
  ...misc,
};

const spacings = {
  bit: '1px',
  byte: '5px',
  kilo: '10px',
  mega: '15px',
  giga: '20px',
};

const composedSpacings = {
  byte: `${spacings.kilo} ${spacings.mega}`,
};

const grid = {
  outerGutter: '10px',
};

const borderRadius = {
  kilo: '1px',
  mega: '4px',
  giga: '5px',
};

const borderWidth = {
  bit: '1px',
  byte: '2px',
};

const fontFamily = {
  default: '"Open Sans", sans-serif',
  color: colors.white,
};

const fontSize = {
  bit: '11px',
  byte: '13px',
  kilo: '15px',
  mega: '18px',
  giga: '24px',
};

const lineHeight = {
  bit: 1.153,
  byte: 1.333,
  kilo: 1.5,
};

const fontWeight = {
  regular: 400,
  semiBold: 600,
  bold: 700,
};

export default {
  colors,
  grid,
  spacings,
  composedSpacings,
  borderRadius,
  borderWidth,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
};
