import styled from 'styled-components';
import { lighten } from 'polished';

const IndicatorStyled = styled('div')`
  display: inline-block;
  position: relative;
  [type='checkbox'],
  [type='checkbox'] {
    position: absolute;
    visibility: hidden;
    + label {
      cursor: pointer;
      flex-direction: row;
      align-items: center;
      display: flex;
      &:before {
        border: 1px solid ${({ theme }) => lighten(0.2, theme.indicatorColor)};
        background: ${({ theme }) => theme.indicatorColor};
        margin-right: ${({ theme }) => theme.indicatorSpacingRight};
        width: 8px;
        height: 8px;
        border-radius: 100%;
        content: ' ';
      }
    }
    &:checked {
      + label {
        &:before {
          border: 1px solid
            ${({ theme, color }) => color || theme.indicatorCheckedColor};
          background: ${({ theme, color }) =>
            color || theme.indicatorCheckedColor};
        }
      }
    }
  }
`;

export default IndicatorStyled;
