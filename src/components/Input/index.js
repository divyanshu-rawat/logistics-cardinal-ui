import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transitions } from 'polished';

export const InputStyled = styled('input')`
  display: block;
  width: 100%;
  background-image: none;
  outline: 0;
  height: ${({ theme }) => theme.inputDefaultHeight};
  box-shadow: ${({ theme }) => theme.inputBoxShadow};
  font-size: ${({ theme }) => theme.inputFontSize};
  border-radius: ${({ theme }) => theme.inputBorderRadius};
  line-height: ${({ theme }) => theme.inputFontSize};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  padding: ${({ theme }) => theme.composedSpacings.byte};
  color: ${({ theme, hasError }) =>
    hasError ? theme.dangerColor : theme.inputTextColor};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.inputErrorBorderColor : theme.inputBorderColor};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.inputDisabledBackgroundColor : theme.inputBackgroundColor};

  ${transitions(
    'border-color ease-in-out 0.15s',
    'box-shadow ease-in-out 0.15s',
  )};

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholderColor};
  }

  &:focus:not(:disabled),
  &:hover:not(:disabled) {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.inputErrorBorderColor : theme.inputBorderColorHover};
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
