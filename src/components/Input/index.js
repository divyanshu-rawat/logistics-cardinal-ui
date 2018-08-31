import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transitions } from 'polished';

export const InputStyled = styled('input')`
  display: block;
  width: 100%;
  height: 40px;
  font-size: 12px;
  line-height: 1.42857143;
  background-image: none;
  border-radius: 4px;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  font-weight: ${({ theme }) => theme.fontWeight.light};
  padding: ${({ theme }) => theme.composedSpacings.byte};
  color: ${({ theme, hasError }) =>
    hasError ? theme.colors.red100 : theme.colors.white};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.red300 : theme.colors.grey200};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey300 : theme.colors.grey400};

  ${transitions(
    'border-color ease-in-out 0.15s',
    'box-shadow ease-in-out 0.15s',
  )};

  &:focus:not(:disabled),
  &:hover:not(:disabled) {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.red300 : theme.colors.grey1000};
  }
`;

const Input = ({ inputRef, placeholder, ...props }) => (
  <InputStyled
    // this is necessary to cover the <MaskedInput /> case
    {...(typeof inputRef === 'function'
      ? { ref: (input) => inputRef(input) }
      : inputRef)}
    placeholder={placeholder}
    {...props}
  />
);

Input.propTypes = {
  /**
   * The inputRef, it's necessary to cover <MaskedInput /> case
   * */
  inputRef: PropTypes.any,
  /**
   * Determines if input has error and applies the correct style to it
   */
  hasError: PropTypes.bool,
  /**
   * For instance, DD.MM.YYYY
   * */
  placeholder: PropTypes.string,
};

export default Input;
