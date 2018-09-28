import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { standard } from '.';
import { createGlobalStyles } from './global-styles';

const CardinalThemeProvider = ({ theme, children }) => {
  const mergedTheme = {
    ...standard,
    ...theme,
  };

  createGlobalStyles(mergedTheme);

  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
};

CardinalThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
};

export { CardinalThemeProvider };
