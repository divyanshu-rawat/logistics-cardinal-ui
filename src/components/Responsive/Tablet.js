import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Responsive from 'react-responsive';

export const Tablet = ({ theme, ...props }) => (
  <Responsive
    minWidth={theme.breakpoints.tablet.minWidth}
    maxWidth={theme.breakpoints.tablet.maxWidth}
    {...props}
  />
);

Tablet.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(Tablet);
