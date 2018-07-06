import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Responsive from 'react-responsive';

export const Default = ({ theme, ...props }) => (
  <Responsive minWidth={theme.breakpoints.default.minWidth} {...props} />
);

Default.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(Default);
