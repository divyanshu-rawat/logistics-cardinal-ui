import styled from 'styled-components';

const sizes = {
  small: '100px',
  regular: '300px',
  block: '100%',
};

const validationStateColor = {
  error: 'inputErrorBorderColor',
  success: 'successColor',
  warning: 'warningColor',
};

const SelectStyled = styled('div')`
  display: inline-block;
  margin-right: 5px;
  width: 100%;
  position: relative;
  min-width: ${sizes.small};
  z-index: ${({ theme, isOpen }) =>
    isOpen ? theme.zIndex.select + 1 : theme.zIndex.select};
  .Select {
    width: ${({ size }) => sizes[size]};
    &-control {
      width: ${({ size }) => sizes[size]};
      background-color: ${({ theme }) => theme.inputBackgroundColor};
      border: 1px solid
        ${({ validationState, theme }) =>
          validationState
            ? theme[validationStateColor[validationState]]
            : theme.inputBorderColor};
      display: table;
      border-spacing: 0;
      border-collapse: separate;
      align-items: center;
      height: ${({ theme }) => theme.inputDefaultHeight};
      &:hover {
        cursor: pointer;
        border-color: ${({ theme }) => theme.inputBorderColorHover};
      }
    }
    &.is-focused,
    &.is-open {
      > .Select-control {
        background-color: ${({ theme }) => theme.inputBackgroundColor};
        border: 1px solid
          ${({ validationState, theme }) =>
            validationState
              ? theme[validationStateColor[validationState]]
              : theme.inputBorderColor};
        box-shadow: none;
      }
    }
    &.is-disabled {
      > .Select-control {
        background-color: ${({ theme }) => theme.inputDisabledBackgroundColor};
        &:hover {
          cursor: default;
          border: 1px solid ${({ theme }) => theme.inputBorderColor};
        }
      }
    }
    &.is-searchable {
      &.is-open > .Select-control {
        cursor: text;
      }

      &.is-focused:not(.is-open) > .Select-control {
        cursor: text;
      }
    }
    &-multi {
      &-value-wrapper {
        flex: 1;
      }
    }
    &-placeholder {
      line-height: ${({ theme }) => theme.inputDefaultHeight};
      color: ${({ theme }) => theme.inputPlaceholderColor};
    }
    &-value {
      margin: 0 0 0 5px;
    }
    &-input {
      background: transparent;
      color: ${({ theme }) => theme.textColor};
      height: 38px;
      > input {
        color: inherit;
        padding: 13px 0 9px;
      }
      &:focus {
        background: transparent;
      }
    }
    &-arrow {
      background-color: ${({ theme }) => theme.primaryColor};
    }
    &-menu-outer {
      box-shadow: 0;
      background-color: ${({ theme }) => theme.inputBackgroundColor};
      border: 1px solid ${({ theme }) => theme.inputBorderColor};
      .Select-menu .Select-option {
        background-color: ${({ theme }) => theme.inputBackgroundColor};
        color: ${({ theme }) => theme.textColor};
        &.is-selected {
          background-color: ${({ theme }) => theme.selectItemFocus};
          border-bottom: 1px solid ${({ theme }) => theme.inputBorderColor};
        }
        &.is-focused {
          background-color: ${({ theme }) => theme.selectItemFocus};
          border: 0;
        }
        &:hover {
          background-color: ${({ theme }) => theme.selectItemFocus};
          border: 0;
        }
        &.is-selected:hover {
          background-color: ${({ theme }) => theme.selectItemFocus};
          border-bottom: 1px solid ${({ theme }) => theme.inputBorderColor};
        }
        &.is-disabled {
          color: ${({ theme }) => theme.selectItemDisabledColor};
          &:hover {
            background-color: ${({ theme }) =>
              theme.selectItemDisabledHoverBackgroundColor};
            color: ${({ theme }) => theme.selectItemDisabledColor};
          }
        }
      }
    }
    &--multi {
      .Select-value {
        display: inline-flex;
        background-color: ${({ theme }) => theme.selectMultiTagBackgroundColor};
        color: ${({ theme }) => theme.selectMultiTagTextColor};
        flex-flow: row-reverse;
        align-items: center;
        &-label {
          flex: 1;
        }
      }
      .Select-multi-value-wrapper {
        .Select-value {
          margin-top: 9px;
        }
      }
    }
    &--single {
      > .Select-control .Select-value {
        margin: 0;
        bottom: 0;
        left: 0;
        padding-left: 10px;
        padding-right: 10px;
        position: absolute;
        right: 0;
        top: 0;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: ${({ theme }) => theme.inputDefaultHeight};
        white-space: nowrap;
      }
    }
    &.has-value {
      &.Select--single {
        > .Select-control .Select-value .Select-value-label {
          color: ${({ theme }) => theme.selectSingleTextColor};
        }
      }
      &.is-pseudo-focused .Select-input {
        opacity: 0;
      }
    }
  }
`;

export default SelectStyled;
