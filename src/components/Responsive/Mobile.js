import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Responsive from 'react-responsive';

export const Mobile = ({ theme, ...props }) => (
  <Responsive
    minWidth={theme.breakpoints.mobile.minWidth}
    maxWidth={theme.breakpoints.mobile.maxWidth}
    {...props}
  />
);

Mobile.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(Mobile);
