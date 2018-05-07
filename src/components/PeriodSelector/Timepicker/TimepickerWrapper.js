import styled from 'styled-components';

export default styled('div')`
  display: inline-block;
  margin-right: 5px;
  .Select {
    display: inline-block;
    vertical-align: top;
    width: ${(props) => (props.size === 'small' ? `100px;` : '100%')} &-control {
      height: 30px;
      background-color: ${(props) => props.theme.greyDeep};
      border: 1px solid #40464f;
      box-shadow: none;
      .Select-input {
        height: 30px;
        &:focus {
          background-color: ${(props) => props.theme.greyDeep};
        }
      }
    }
    &.is-focused,
    &.is-open {
      .Select-control {
        background-color: ${(props) => props.theme.greyDeep};
        border: 1px solid #40464f;
        box-shadow: none;
      }
    }
    &-menu-outer {
      box-shadow: 0;
      background-color: ${(props) => props.theme.greyDeep};
      border: 1px solid #40464f;
      .Select-menu .Select-option {
        background-color: ${(props) => props.theme.greyDeep};
        color: #ffffff;
        &.is-selected {
          background-color: ${(props) => props.theme.greyDeep};
          border-bottom: 1px solid #40464f;
        }
        &.is-focused {
          background-color: ${(props) => props.theme.greyDeep};
          border: 0;
        }
        &:hover {
          background-color: ${(props) => props.theme.greyMedium};
          border: 0;
        }
        &.is-selected:hover {
          background-color: ${(props) => props.theme.greyMedium};
          border-bottom: 1px solid #40464f;
        }
        &.is-disabled {
          color: ${(props) => props.theme.inactive};
          &:hover {
            background-color: ${(props) => props.theme.greyDeep};
            color: ${(props) => props.theme.inactive};
          }
        }
      }
    }
    &-placeholder,
    & span {
      line-height: 30px;
    }
    &-arrow-zone,
    &--single > .Select-control .Select-value {
      line-height: 30px;
      height: 30px;
    }
    &--multi {
      .Select-control {
        background-color: transparent;
        border: 0;
      }
      &.is-focused,
      &.is-open {
        .Select-control {
          background-color: transparent;
          border: 0;
        }
      }
      .Select-value {
        margin: 0 5px 0 0;
        border-radius: 6px;
        line-height: 22px;
      }
      .Select-value-icon,
      .Select-value-label {
        padding-top: 0;
        padding-bottom: 0;
      }
      span {
        line-height: 24px;
      }
    }
    &.has-value.Select--single
      > .Select-control
      .Select-value
      .Select-value-label {
      color: #b2b8c0;
    }
  }
`;
