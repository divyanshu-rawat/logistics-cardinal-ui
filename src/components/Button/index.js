import React from 'react';
import PropTypes from 'prop-types';
import { Button as RBButton } from 'react-bootstrap';

const Button = ({
  active,
  disabled,
  href,
  stretch,
  elementType,
  children,
  actionType,
  onClick,
  size,
}) => (
  <RBButton
    active={active}
    disabled={disabled}
    href={href}
    block={stretch}
    type={elementType}
    bsStyle={actionType}
    onClick={onClick}
    {...{ bsSize: size || null }}
  >
    {children}
  </RBButton>
);

Button.propTypes = {
  /**
   * The html inside of the button
   */
  children: PropTypes.any.isRequired,
  /**
   * It's going to generate the action color such as
   * .btn-primary, .btn-info, .btn-default and so on...
   */
  actionType: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
  ]).isRequired,
  /**
   * Button type
   */
  elementType: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
  /**
   * Flag to determine if the button is active or not
   */
  /**
   * Size of the button
   */
  size: PropTypes.oneOf(['large', '', 'small', 'xsmall']).isRequired,
  active: PropTypes.bool,
  /**
   * Flag to determine if the button is disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * Anchor
   */
  href: PropTypes.string,
  /**
   * Makes button stretched
   */
  stretch: PropTypes.bool,
  /**
   * Action that will be triggered when the button is clicked
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  active: false,
  disabled: false,
  href: '',
  stretch: false,
  actionType: 'default',
  elementType: 'button',
  size: '',
};

export default Button;
