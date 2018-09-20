import styled from 'styled-components';

const sizes = {
  small: '100px',
  regular: '300px',
  block: '100%',
};

const validationStateColor = {
  error: 'danger',
  success: 'success',
  warning: 'warning',
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
        background-color: ${({ theme }) => theme.colors.grey300};
        &:hover {
          cursor: default;
          border: 1px solid ${({ theme }) => theme.colors.grey500};
        }
      }
    }
    &-control {
      width: ${({ size }) => sizes[size]};
      background-color: ${({ theme }) => theme.colors.grey400};
      border: 1px solid
        ${({ validationState, theme }) =>
          validationState
            ? theme.colors[validationStateColor[validationState]]
            : theme.colors.grey500};
      display: flex;
      min-height: 40px;
      align-items: center;
      height: auto;
      &:hover {
        cursor: pointer;
        border-color: ${({ theme }) => theme.colors.grey1000};
      }
    }
    &-multi {
      &-value-wrapper {
        flex: 1;
      }
    }
    &-placeholder {
      line-height: 40px;
      color: ${({ theme }) => theme.colors.placeholder};
    }
    &-value {
      margin: 0 0 0 5px;
    }
    &.is-focused,
    &.is-open {
      .Select-control {
        background-color: ${({ theme }) => theme.colors.grey400};
        border: 1px solid
          ${({ validationState, theme }) =>
            validationState
              ? theme.colors[validationStateColor[validationState]]
              : theme.colors.grey500};
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
      background-color: ${({ theme }) => theme.colors.primary100};
    }
    &-menu-outer {
      box-shadow: 0;
      background-color: ${({ theme }) => theme.colors.grey400};
      border: 1px solid ${({ theme }) => theme.colors.grey500};
      .Select-menu .Select-option {
        background-color: ${({ theme }) => theme.colors.grey400};
        color: ${({ theme }) => theme.colors.white};
        &.is-selected {
          background-color: ${({ theme }) => theme.colors.grey300};
          border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
        }
        &.is-focused {
          background-color: ${({ theme }) => theme.colors.grey300};
          border: 0;
        }
        &:hover {
          background-color: ${({ theme }) => theme.colors.grey300};
          border: 0;
        }
        &.is-selected:hover {
          background-color: ${({ theme }) => theme.colors.grey300};
          border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
        }
        &.is-disabled {
          color: ${({ theme }) => theme.colors.grey100};
          &:hover {
            background-color: ${({ theme }) => theme.colors.grey400};
            color: ${({ theme }) => theme.colors.grey100};
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
        background-color: ${({ theme }) => theme.colors.primary100};
        color: ${({ theme }) => theme.colors.white};
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
          color: ${({ theme }) => theme.colors.white};
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
