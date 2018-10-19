import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { SIZES } from './constants';

const buttonVariantSize = (
  fontSize,
  paddingY,
  paddingX,
  lineHeight,
  borderRadius,
) => `
  font-size: ${fontSize};
  padding: ${paddingY} ${paddingX};
  line-height: ${lineHeight};
  border-radius: ${borderRadius};
`;

const buttonVariantColor = (theme, key) => `
    border-color: ${theme[key]};
    background-color: ${theme[key]};

    &:focus,
    &:active {
      &:not(:disabled) {
        box-shadow: 0 0 0 0.2rem ${lighten(0.2, theme[key])};
      }
    }

    &:hover {
      &:not(:disabled) {
        border-color: ${darken(0.1, theme[key])};
        background-color: ${darken(0.1, theme[key])};
        border-color: ${darken(0.1, theme[key])};
      }
    }
  `;

const generateButtonSize = (
  {
    buttonFontSize,
    buttonFontSizeSmall,
    buttonFontSizeLarge,
    buttonPaddingY,
    buttonPaddingYXsmall,
    buttonPaddingYSmall,
    buttonPaddingYLarge,
    buttonPaddingX,
    buttonPaddingXXsmall,
    buttonPaddingXSmall,
    buttonPaddingXLarge,
    buttonLineHeight,
    buttonLineHeightSmall,
    buttonLineHeightLarge,
    buttonBorderRadius,
  },
  size,
) => {
  switch (size) {
    case SIZES.XSMALL:
      return buttonVariantSize(
        buttonFontSizeSmall,
        buttonPaddingYXsmall,
        buttonPaddingXXsmall,
        buttonLineHeightSmall,
        buttonBorderRadius,
      );
    case SIZES.SMALL:
      return buttonVariantSize(
        buttonFontSizeSmall,
        buttonPaddingYSmall,
        buttonPaddingXSmall,
        buttonLineHeightSmall,
        buttonBorderRadius,
      );
    case SIZES.LARGE:
      return buttonVariantSize(
        buttonFontSizeLarge,
        buttonPaddingYLarge,
        buttonPaddingXLarge,
        buttonLineHeightLarge,
        buttonBorderRadius,
      );
    default:
      return buttonVariantSize(
        buttonFontSize,
        buttonPaddingY,
        buttonPaddingX,
        buttonLineHeight,
        buttonBorderRadius,
      );
  }
};

export const ButtonStyled = styled('button')`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  font-weight: ${({ theme }) => theme.buttonFontWeight};
  color: ${({ theme }) => theme.buttonFontColor};
  border: ${({ theme }) => theme.buttonBorderWidth} solid transparent;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  ${({ theme, size }) => generateButtonSize(theme, size)};

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: ${({ theme }) => theme.buttonFocusBoxShadow};
  }

  &.disabled,
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: ${({ theme }) => theme.buttonDisabledOpacity};
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:focus,
  &:active {
    &:not(:disabled) {
      outline: 0;
    }
  }

  &:not(:disabled):active {
    box-shadow: ${({ theme }) => theme.buttonActiveBoxShadow};

    &:focus {
      box-shadow: ${({ theme }) => theme.buttonFocusBoxShadow};
    }
  }
`;

export const ButtonDefaultStyled = ButtonStyled.extend`
  color: ${({ theme }) => theme.primaryColor};
  border-color: ${({ theme }) => theme.primaryColor};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => darken(0.2, theme.primaryColor)};
  }

  &:focus:not(:disabled),
  &:active:not(:disabled) {
    box-shadow: 0 0 0 0.2rem ${({ theme }) => lighten(0.1, theme.primaryColor)};
  }
`;

export const ButtonPrimaryStyled = ButtonStyled.extend`
  ${({ theme }) => buttonVariantColor(theme, 'primaryColor')};
`;

export const ButtonSuccessStyled = ButtonStyled.extend`
  ${({ theme }) => buttonVariantColor(theme, 'successColor')};
`;

export const ButtonInfoStyled = ButtonStyled.extend`
  ${({ theme }) => buttonVariantColor(theme, 'infoColor')};
`;

export const ButtonWarningStyled = ButtonStyled.extend`
  ${({ theme }) => buttonVariantColor(theme, 'warningColor')};
`;

export const ButtonDangerStyled = ButtonStyled.extend`
  ${({ theme }) => buttonVariantColor(theme, 'dangerColor')};
`;
