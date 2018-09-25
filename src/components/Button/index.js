import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonPrimaryStyled,
  ButtonSuccessStyled,
  ButtonDefaultStyled,
  ButtonDangerStyled,
  ButtonInfoStyled,
  ButtonWarningStyled,
} from './ButtonStyled';

import { ACTION_TYPES, SIZES } from './constants';

const resolveButtonType = (type) => {
  switch (type) {
    case ACTION_TYPES.PRIMARY:
      return ButtonPrimaryStyled;
    case ACTION_TYPES.SUCCESS:
      return ButtonSuccessStyled;
    case ACTION_TYPES.INFO:
      return ButtonInfoStyled;
    case ACTION_TYPES.WARNING:
      return ButtonWarningStyled;
    case ACTION_TYPES.DANGER:
      return ButtonDangerStyled;
    case ACTION_TYPES.LINK:
    default:
      return ButtonDefaultStyled;
  }
};

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
}) => {
  const ButtonComponent = resolveButtonType(actionType);

  return (
    <ButtonComponent
      active={active}
      disabled={disabled}
      href={href}
      block={stretch}
      type={elementType}
      onClick={onClick}
      size={size}
    >
      {children}
    </ButtonComponent>
  );
};

Button.propTypes = {
  /**
   * The html inside of the button
   */
  children: PropTypes.any.isRequired,
  /**
   * It's going to generate the action color such as
   * .btn-primary, .btn-info, .btn-default and so on...
   */
  actionType: PropTypes.oneOf(Object.values(ACTION_TYPES)).isRequired,
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
  size: PropTypes.oneOf(Object.values(SIZES)).isRequired,
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
  actionType: ACTION_TYPES.DEFAULT,
  elementType: 'button',
  size: SIZES.DEFAULT,
};

export default Button;
