const white = '#fff';
const black = '#000';

const primary = {
  primary100: '#db0062',
  primary200: '#375f8a',
};

const greys = {
  grey100: '#96a2b0',
  grey200: '#3f454d',
  grey300: '#343a42',
  grey400: '#292d33',
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
  red900: '#a73d28',
};

const yellows = {
  yellow100: '#f2e5cb',
  yellow300: '#f7da9f',
  yellow500: '#ffc859',
  yellow700: '#d4a546',
  yellow900: '#ab8433',
};

const misc = {
  bodyBackground: '#fff',
  mainBackground: '#ccc',
  textColor: white,
  danger: reds.red500,
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
  bit: '4px',
  byte: '8px',
  kilo: '12px',
  mega: '16px',
  giga: '24px',
  tera: '32px',
  peta: '40px',
  exa: '48px',
  zetta: '56px',
};

const borderRadius = {
  kilo: '1px',
  mega: '4px',
  giga: '5px',
};

const borderWidth = {
  kilo: '1px',
  mega: '2px',
};

const fontFamily = {
  default: '"Open Sans", sans-serif',
};

const fontWeight = {
  regular: '400',
  bold: '700',
};

export default {
  colors,
  spacings,
  borderRadius,
  borderWidth,
  fontFamily,
  fontWeight,
};
