import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Responsive from 'react-responsive';

export const Desktop = ({ theme, ...props }) => (
  <Responsive
    minWidth={theme.breakpoints.desktop.minWidth}
    maxWidth={theme.breakpoints.desktop.maxWidth}
    {...props}
  />
);

Desktop.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(Desktop);
