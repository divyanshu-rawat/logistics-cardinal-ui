// Required Fields
export const aliases = {
  /**
   * Text Variables
   */
  textColor: 'black',
  textFontSize: '12px',
  textFontWeight: 300,
  textFontFamily: '',
  textSpacing: '10px',
  textFontSizeXSmall: '',
  textFontSizeSmall: '',
  textFontSizeLarge: '',
  textFontSizeXLarge: '',
  /**
   * Heading Variables
   */
  h1FontSize: '32px',
  h1LineHeight: '',
  h2FontSize: '',
  h2LineHeight: '',
  h3FontSize: '',
  h3LineHeight: '',
  h4FontSize: '',
  h4LineHeight: '',
  h5FontSize: '',
  h5LineHeight: '',
  headingSpacing: '',
  headingFontWeightLight: '',
  headingFontWeightBold: '',
  /**
   * Color Variables
   */
  bodyBackground: 'white',
  mainBackground: '',
  primaryColor: '#d70f64',
  dangerColor: 'red',
  successColor: 'green',
  warningColor: 'yellow',
  infoColor: 'cyan',
  overlayColor: 'rgba(25, 29, 35, 0.82)',
  /**
   * Line Height Variables
   */
  lineHeightBase: 1.5,
  /**
   * Input and Select Variables
   */
  inputDefaultHeight: '40px',
  inputPlaceholderColor: '',
  inputBackgroundColor: '',
  inputDisabledBackgroundColor: '',
  inputBorderColor: '',
  inputErrorBorderColor: '',
  inputBorderColorHover: '',
  inputBorderRadius: '',
  inputTextColor: '',
  inputLineHeight: '',
  inputFontSize: '',
  inputFontWeight: '',
  inputBoxShadow: '',
  inputPadding: '',
  // Select
  selectItemFocus: '',
  selectItemDisabledColor: '',
  selectItemDisabledHoverBackgroundColor: '',
  selectMultiTagBackgroundColor: '',
  selectMultiTagTextColor: '',
  selectSingleTextColor: '',
  /**
   * Input Feedback Variables
   */
  inputFeedbackSpacing: '',
  inputFeedbackFontWeight: '',
  inputFeedbackFontSize: '',
  /**
   * Button Variables
   */
  buttonFontWeight: '',
  buttonFontColor: '',
  buttonBorderWidth: '',
  buttonFocusBoxShadow: '',
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
  buttonFontSize: '12px',
  buttonFontSizeSmall: '11px',
  buttonFontSizeLarge: '15px',
  buttonLineHeight: '',
  buttonLineHeightSmall: 1.5,
  buttonLineHeightLarge: 1.333,
  buttonBorderRadius: '',
  /**
   * Radio Button Variables
   */
  radioSpacingRight: '',
  radioFontWeight: '',
  radioInactiveBorderColor: '#ccc',
  /**
   * Indicator Radio Button Variables
   */
  indicatorColor: '',
  indicatorSpacingRight: '',
  indicatorCheckedColor: '',
  /**
   * Label Variables
   */
  labelTextColor: '',
  labelTextColorError: '',
  labelFontWeight: '',
  labelFontSize: '',
  labelBottomSpacing: '',
  /**
   * Drawer Variables
   */
  drawerBackgroundColor: '',
  drawerBoxShadow: '',
  drawerPadding: '',
  /**
   * Spacing Variables
   */
  spacing: '',
  /**
   * Spinner Variables
   */
  spinnerOverlayBackgroundColor: 'rgba(52, 58, 66, 0.8)',
  /**
   * Switcher Variables
   */
  switcherSpacingRight: '',
  switcherBorderColor: '',
  switcherBoxShadow: '',
  /**
   * Tabs - Horizontal - Variables
   */
  horizontalTabButtonBorderRadius: '',
  horizontalTabButtonBackgroundColor: '',
  horizontalTabButtonColor: '',
  horizontalTabButtonColorActive: '',
  horizontalTabButtonSpacingRight: '',
  horizontalTabButtonPadding: '',
  horizontalTabContainerPadding: '',
  horizontalTabContainerBackgroundColor: '',
  /**
   * Tabs - Vertical - Variables
   */
  verticalTabButtonBackgroundColor: '',
  verticalTabButtonSpacingRight: '',
  verticalTabButtonPadding: '',
  verticalTabButtonActiveBackgroundColor: '',
  verticalTabSidebarBackgroundColor: '',
  verticalTabContainerPadding: '',
  verticalTabContainerBackgroundColor: '',
  /**
   * TimeSpanDisplay - Variables
   */
  timeSpanDisplayTextColor: '',
  /**
   * Tooltip - Variables
   */
  tooltipBorderRadius: '',
  tooltipBackgroundColor: '',
  tooltipBorderColor: '',
  tooltipTextColor: '',
  tooltipFontSize: '',
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
  modalBackgroundColor: '',
  modalBorderColor: '',
  modalBorderStyle: '',
  modalBoxShadow: '',
  modalBorderRadius: '',
  modalOutline: 0,
  modalWidth: '80%',
  modalMaxWidth: '60rem',
  modalMinWidth: '20rem',
  minHeight: '10rem',
  modalWidthSmall: '400px',
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
};

export const StandardTheme = {
  ...aliases,
};
