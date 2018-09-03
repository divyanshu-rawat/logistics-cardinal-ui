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
  grey600: '#8C9BA5',
  grey700: '#24282E',
  grey800: '#23262C',
  grey900: '#292D33',
  grey1000: '#6d7785',
  grey1100: '#b2b8c0',
};

const greens = {
  green100: '#c6e5cb',
  green300: '#97e2a3',
  green500: '#62de76',
  green700: '#49b85b',
  green900: '#2f903e',
};

const reds = {
  red100: '#cb3548',
  red300: '#9b5a62',
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
  overlayColor: 'rgba(25, 29, 35, 0.82)',
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
  light: 300,
  regular: 400,
  semiBold: 600,
  bold: 700,
};

const zIndex = {
  select: 1090,
  tooltip: 2020,
  spinnerOverlay: 2040,
  drawerOverlay: 2040,
  drawerContent: 2041,
  spinner: 2041,
  navbar: 2030,
  loadingBar: 3000,
};

const boxShadow = {
  switchHandler: '0px 0px 1px 5px rgba(255, 255, 255, 0.2)',
  drawer: '0 2px 34px 0 rgba(0, 0, 0, 0.3)',
};

const breakpoints = {
  default: {
    minWidth: 768,
  },
  largeDesktop: {
    minWidth: 1200,
  },
  desktop: {
    minWidth: 992,
    maxWidth: 1200,
  },
  mobile: {
    minWidth: 0,
    maxWidth: 768,
  },
  tablet: {
    minWidth: 768,
    maxWidth: 992,
  },
};

const transitions = {
  overlayTransition: 'opacity 0.3s ease-out, visibility 0.3s ease-out',
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
  breakpoints,
  zIndex,
  boxShadow,
  transitions,
};
