import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { standard } from '.';
import { GlobalStyles } from './global-styles';

const CardinalThemeProvider = ({ theme, injectGlobal, children }) => {
  const mergedTheme = {
    ...standard,
    ...theme,
  };

  return (
    <ThemeProvider theme={mergedTheme}>
      <Fragment>
        <GlobalStyles injectGlobal={injectGlobal} />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

CardinalThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  injectGlobal: PropTypes.func,
  theme: PropTypes.object,
};

export { CardinalThemeProvider };
