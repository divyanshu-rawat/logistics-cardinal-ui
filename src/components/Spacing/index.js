import React from 'react';
import PropTypes from 'prop-types';
import SpacingStyled from './SpacingStyled';

const MARGIN = 'margin';
const PADDING = 'padding';

const Spacing = ({ children, ...props }) => (
  <SpacingStyled {...props}>{children}</SpacingStyled>
);

Spacing.propTypes = {
  type: PropTypes.oneOf([MARGIN, PADDING]).isRequired,
  children: PropTypes.element.isRequired,
  inline: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

Spacing.defaultProps = {
  type: MARGIN,
};

export default Spacing;
