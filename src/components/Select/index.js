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

export default styled('div')`
  display: inline-block;
  margin-right: 5px;
  width: 100%;
  .Select {
    width: ${(props) => sizes[props.size]};
    &-control {
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
    }
    &-multi {
      &-value-wrapper {
        flex: 1;
      }
    }
    &-placeholder {
      position: relative;
    }
    &-value {
      margin: 5px 0 5px 5px;
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
      opacity: 1;
      z-index: -1;
    }
    &-menu-outer {
      box-shadow: 0;
      background-color: ${({ theme }) => theme.colors.grey400};
      border: 1px solid ${({ theme }) => theme.colors.grey500};
      .Select-menu .Select-option {
        background-color: ${({ theme }) => theme.colors.grey400};
        color: ${({ theme }) => theme.colors.white};
        &.is-selected {
          background-color: ${({ theme }) => theme.colors.grey400};
          border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
        }
        &.is-focused {
          background-color: ${({ theme }) => theme.colors.grey400};
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
    }
    &.has-value {
      &.Select--single {
        > .Select-control .Select-value .Select-value-label {
          color: #b2b8c0;
        }
      }
    }
  }
`;
