import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Responsive from 'react-responsive';

export const LargeDesktop = ({ theme, ...props }) => (
  <Responsive minWidth={theme.breakpoints.largeDesktop.minWidth} {...props} />
);

LargeDesktop.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(LargeDesktop);
