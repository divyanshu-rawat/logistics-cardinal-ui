import styled from 'styled-components';

export default styled('div')`
  display: inline-block;
  margin-right: 5px;
  .Select {
    display: inline-block;
    width: ${(props) => (props.size === 'small' ? `100px;` : '300px')};
    &-control {
      min-height: 40px;
      background-color: ${(props) => props.theme.colors.grey400};
      border: 1px solid #40464f;
      display: flex;
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
        background-color: ${(props) => props.theme.colors.grey400};
        border: 1px solid #40464f;
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
      background-color: ${(props) => props.theme.colors.grey400};
      border: 1px solid #40464f;
      .Select-menu .Select-option {
        background-color: ${(props) => props.theme.colors.grey400};
        color: #ffffff;
        &.is-selected {
          background-color: ${(props) => props.theme.colors.grey400};
          border-bottom: 1px solid #40464f;
        }
        &.is-focused {
          background-color: ${(props) => props.theme.colors.grey400};
          border: 0;
        }
        &:hover {
          background-color: ${(props) => props.theme.colors.grey300};
          border: 0;
        }
        &.is-selected:hover {
          background-color: ${(props) => props.theme.colors.grey300};
          border-bottom: 1px solid #40464f;
        }
        &.is-disabled {
          color: ${(props) => props.theme.colors.grey100};
          &:hover {
            background-color: ${(props) => props.theme.colors.grey400};
            color: ${(props) => props.theme.colors.grey100};
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
        background-color: ${(props) => props.theme.colors.primary100};
        color: #fff;
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
