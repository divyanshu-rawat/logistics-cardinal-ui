import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { standard } from '.';
import { GlobalStyles } from './global-styles';

const CardinalThemeProvider = ({ theme, children }) => {
  const mergedTheme = {
    ...standard,
    ...theme,
  };

  return (
    <ThemeProvider theme={mergedTheme}>
      <Fragment>
        <GlobalStyles />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

CardinalThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
};

export { CardinalThemeProvider };
