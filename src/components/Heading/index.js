import React from 'react';
import PropTypes from 'prop-types';

import HeadingStyled from './HeadingStyled';

const Heading = ({ children, ...props }) => {
  const RenderAsProp = HeadingStyled.withComponent(props.as);
  return <RenderAsProp {...props}>{children}</RenderAsProp>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  noMargin: PropTypes.bool.isRequired,
  bold: PropTypes.bool.isRequired,
};

Heading.defaultProps = {
  as: 'h3',
  noMargin: false,
  bold: false,
};

export default Heading;
