import styled from 'styled-components';

const sizes = {
  small: '100px',
  regular: '300px',
  block: '100%',
};

const validationStateColor = {
  error: 'dangerColor',
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
    &.is-disabled {
      > .Select-control {
        background-color: ${({ theme }) => theme.inputDisabledBackgroundColor};
        &:hover {
          cursor: default;
          border: 1px solid ${({ theme }) => theme.inputBorderColor};
        }
      }
    }
    &-control {
      width: ${({ size }) => sizes[size]};
      background-color: ${({ theme }) => theme.inputBackgroundColor};
      border: 1px solid
        ${({ validationState, theme }) =>
          validationState
            ? theme.colors[validationStateColor[validationState]]
            : theme.inputBorderColor};
      display: flex;
      min-height: ${({ theme }) => theme.inputDefaultHeight};
      align-items: center;
      height: auto;
      &:hover {
        cursor: pointer;
        border-color: ${({ theme }) => theme.inputBorderColorHover};
      }
    }
    &-multi {
      &-value-wrapper {
        flex: 1;
      }
    }
    &-placeholder {
      line-height: ${({ theme }) => theme.inputDefaultHeight};
      color: ${({ theme }) => theme.colors.placeholder};
    }
    &-value {
      margin: 0 0 0 5px;
    }
    &.is-focused,
    &.is-open {
      .Select-control {
        background-color: ${({ theme }) => theme.inputBackgroundColor};
        border: 1px solid
          ${({ validationState, theme }) =>
            validationState
              ? theme.colors[validationStateColor[validationState]]
              : theme.inputBorderColor};
        box-shadow: none;
      }
    }
    &-input {
      position: absolute;
      top: 0;
      background: transparent;
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
    &--single {
      > .Select-control .Select-value {
        position: relative;
        margin: 0;
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
        padding: 5px 0 0;
        .Select-value {
          margin-bottom: 5px;
        }
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
  &.is-searchable {
    &.is-open > .Select-control {
      cursor: text;
    }

    &.is-focused:not(.is-open) > .Select-control {
      cursor: text;
    }
  }
`;

export default SelectStyled;
