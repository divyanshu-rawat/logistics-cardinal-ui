import React from 'react';
import PropTypes from 'prop-types';

import TooltipStyled from './TooltipStyled';

const Tooltip = ({ children, content, position }) => (
  <TooltipStyled content={content} position={position}>
    {children}
  </TooltipStyled>
);

Tooltip.propTypes = {
  /** Element to be wrapped into the tooltip */
  children: PropTypes.node.isRequired,
  /** The string content */
  content: PropTypes.string.isRequired,
  /** Tooltip Position */
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

Tooltip.defaultProps = {
  position: 'top',
};

export default Tooltip;
