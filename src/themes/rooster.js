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
  grey1200: '#909295',
  grey1300: '#2c3037',
};

const greens = {
  green100: '#00bc8c',
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
  yellow100: '#d28a2e',
  yellow300: '#f7da9f',
  yellow500: '#ffc859',
  yellow700: '#d4a546',
  yellow900: '#ab8433',
};

const blues = {
  blue100: '#2bdbdb',
};

const colors = {
  white,
  black,
  ...primary,
  ...greys,
  ...greens,
  ...reds,
  ...yellows,
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

const boxShadow = {
  switchHandler: '0px 0px 1px 5px rgba(255, 255, 255, 0.2)',
  drawer: '0 2px 34px 0 rgba(0, 0, 0, 0.3)',
  inputButton: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
  modalBoxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
};

// Required Fields
export const aliases = {
  /**
   * Text Variables
   */
  textColor: white,
  textFontSize: fontSize.byte,
  textFontWeight: fontWeight.regular,
  textFontWeightLight: fontWeight.light,
  textFontFamily: fontFamily.default,
  textSpacing: composedSpacings.byte,
  textFontSizeXSmall: fontSize.bit,
  textFontSizeSmall: fontSize.byte,
  textFontSizeLarge: fontSize.mega,
  textFontSizeXLarge: fontSize.giga,
  /**
   * Heading Variables
   */
  h1FontSize: fontSize.giga,
  h1LineHeight: lineHeight.kilo,
  h2FontSize: fontSize.mega,
  h2LineHeight: lineHeight.byte,
  h3FontSize: fontSize.kilo,
  h3LineHeight: lineHeight.byte,
  h4FontSize: fontSize.byte,
  h4LineHeight: lineHeight.bit,
  h5FontSize: fontSize.bit,
  h5LineHeight: fontSize.bit,
  headingSpacing: spacings.kilo,
  headingFontWeightLight: fontWeight.regular,
  headingFontWeightBold: fontWeight.semiBold,
  /**
   * Color Variables
   */
  bodyBackground: greys.grey400,
  mainBackground: '343941',
  primaryColor: primary.primary100,
  dangerColor: reds.red100,
  successColor: greens.green100,
  warningColor: yellows.yellow700,
  infoColor: blues.blue100,
  overlayColor: 'rgba(25, 29, 35, 0.82)',
  /**
   * Line Height Variables
   */
  lineHeightBase: lineHeight.kilo,
  /**
   * Input and Select Variables
   */
  inputDefaultHeight: '40px',
  // Subtracts border top and bottom
  // It's needed because of react-select-plus
  inputInvisibleHeight: '38px',
  inputPlaceholderColor: greys.grey1200,
  inputBackgroundColor: greys.grey400,
  inputDisabledBackgroundColor: greys.grey300,
  inputBorderColor: greys.grey200,
  inputErrorBorderColor: reds.red300,
  inputBorderColorHover: greys.grey1000,
  inputBorderRadius: borderRadius.mega,
  inputTextColor: white,
  inputLineHeight: '40px',
  inputFontSize: fontSize.byte,
  inputFontWeight: fontWeight.light,
  inputBoxShadow: boxShadow.inputButton,
  inputPadding: composedSpacings.byte,
  // Select
  selectItemFocus: greys.grey300,
  selectItemDisabledColor: greys.grey100,
  selectItemDisabledHoverBackgroundColor: greys.grey400,
  selectMultiTagBackgroundColor: primary.primary100,
  selectMultiTagTextColor: white,
  selectSingleTextColor: white,
  /**
   * Input Feedback Variables
   */
  inputFeedbackSpacing: '0px',
  inputFeedbackFontWeight: fontWeight.semiBold,
  inputFeedbackFontSize: fontSize.byte,
  /**
   * Button Variables
   */
  buttonFontWeight: fontWeight.light,
  buttonFontColor: white,
  buttonBorderWidth: borderWidth.bit,
  buttonFocusBoxShadow: boxShadow.inputButton,
  buttonDisabledOpacity: 0.65,
  buttonActiveBoxShadow: 'inset 0 3px 5px rgba($black, .125)',
  buttonPaddingY: '10px',
  buttonPaddingYXSmall: '1px',
  buttonPaddingYLarge: '18px',
  buttonPaddingYSmall: '6px',
  buttonPaddingSmall: '9px',
  buttonPaddingX: '15px',
  buttonPaddingXSmall: '5px',
  buttonPaddingXLarge: '27px',
  buttonFontSize: fontSize.byte,
  buttonFontSizeSmall: '11px',
  buttonFontSizeLarge: '15px',
  buttonLineHeight: lineHeight.kilo,
  buttonLineHeightSmall: 1.5,
  buttonLineHeightLarge: 1.333,
  buttonBorderRadius: borderRadius.mega,
  /**
   * Radio Button Variables
   */
  radioSpacingRight: spacings.kilo,
  radioFontWeight: fontWeight.regular,
  radioInactiveBorderColor: greys.grey600,
  /**
   * Indicator Radio Button Variables
   */
  indicatorColor: greys.grey200,
  indicatorSpacingRight: spacings.byte,
  indicatorCheckedColor: greys.grey100,
  /**
   * Label Variables
   */
  labelTextColor: primary.primary400,
  labelTextColorError: reds.red100,
  labelFontWeight: fontWeight.regular,
  labelFontSize: fontSize.bit,
  labelBottomSpacing: spacings.byte,
  /**
   * Drawer Variables
   */
  drawerBackgroundColor: greys.grey300,
  drawerBoxShadow: boxShadow.drawer,
  drawerPadding: composedSpacings.byte,
  /**
   * Spacing Variables
   */
  spacing: spacings.kilo,
  /**
   * Spinner Variables
   */
  spinnerOverlayBackgroundColor: 'rgba(52, 58, 66, 0.8)',
  /**
   * Switcher Variables
   */
  switcherSpacingRight: spacings.kilo,
  switcherBorderColor: greys.grey200,
  switcherBoxShadow: boxShadow.switchHandler,
  /**
   * Tabs - Horizontal - Variables
   */
  horizontalTabButtonBorderRadius: borderRadius.mega,
  horizontalTabButtonBackgroundColor: greys.grey300,
  horizontalTabButtonBorderColor: greys.grey400,
  horizontalTabButtonBorderColorActive: greys.grey300,
  horizontalTabButtonColor: greys.grey100,
  horizontalTabButtonColorActive: colors.white,
  horizontalTabButtonSpacingRight: spacings.bit,
  horizontalTabButtonPadding: composedSpacings.byte,
  horizontalTabContainerPadding: composedSpacings.byte,
  horizontalTabContainerBackgroundColor: greys.grey300,
  /**
   * Tabs - Vertical - Variables
   */
  verticalTabButtonBackgroundColor: greys.grey700,
  verticalTabButtonSpacingRight: spacings.bit,
  verticalTabButtonPadding: composedSpacings.byte,
  verticalTabButtonActiveBackgroundColor: greys.grey800,
  verticalTabButtonActiveTextColor: primary.primary100,
  verticalTabButtonTextColor: white,
  verticalTabSidebarBackgroundColor: greys.grey900,
  verticalTabContainerPadding: composedSpacings.byte,
  verticalTabContainerBackgroundColor: greys.grey300,
  /**
   * TimeSpanDisplay - Variables
   */
  timeSpanDisplayTextColor: greys.grey100,
  /**
   * Tooltip - Variables
   */
  tooltipBorderRadius: borderRadius.mega,
  tooltipBackgroundColor: greys.grey400,
  tooltipBorderColor: greys.grey500,
  tooltipTextColor: colors.white,
  tooltipFontSize: fontSize.bit,
  tooltipHoverOpacity: 0.9,
  /**
   * Transitions
   */
  transitions: {
    overlayTransition: 'opacity 0.3s ease-out, visibility 0.3s ease-out',
  },
  /**
   * Modal
   */
  modalBackgroundColor: greys.grey400,
  modalBorderColor: greys.grey200,
  modalBorderStyle: 'solid',
  modalBoxShadow: boxShadow.modalBoxShadow,
  modalBorderRadius: borderRadius.mega,
  modalOutline: 0,
  modalWidth: '80%',
  modalMaxWidth: '60rem',
  modalMinWidth: '20rem',
  minHeight: '10rem',
  /**
   * Accordion
   */
  accordionHeaderHeight: '45px',
  accordionDividerBorderColor: greys.grey1300,
  /**
   * Z-Index
   */
  zIndex: {
    select: 1090,
    tooltip: 2020,
    spinnerOverlay: 2040,
    drawerOverlay: 2040,
    drawerContent: 2041,
    spinner: 2041,
    navbar: 2030,
    loadingBar: 3000,
    modalOverlay: 2050,
    modalContent: 2060,
  },
  /**
   * Media Query Breakpoints
   */
  breakpoints: {
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
  },
  grid: {
    outerGutter: '10px',
  },
  colors,
  fontSize,
  fontWeight,
};

export const RoosterTheme = {
  ...aliases,
};
