import React from 'react';
import PropTypes from 'prop-types';
import TextStyled from './TextStyled';

const Text = ({ children, ...props }) => {
  const RenderAsProp = TextStyled.withComponent(props.as);
  return <RenderAsProp {...props}>{children}</RenderAsProp>;
};

Text.propTypes = {
  children: PropTypes.any.isRequired,
  /** Final Element HTML to be rendered */
  as: PropTypes.string.isRequired,
  /** Text Color */
  color: PropTypes.string,
  /** Font Family, default is the theme one */
  fontFamily: PropTypes.string,
  /** Font Weight, default is the theme one */
  weight: PropTypes.number,
  /** Text Align, default is left */
  align: PropTypes.string,
  /** Truncate... */
  truncate: PropTypes.bool,
  /** Text Transform, UPPERCASE */
  uppercase: PropTypes.bool,
  margin: PropTypes.string,
};

Text.defaultProps = {
  children: '',
  as: 'span',
};

export default Text;
