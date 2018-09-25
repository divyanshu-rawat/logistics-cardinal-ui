import styled from 'styled-components';
import { borderRadius } from 'polished';

const HorizontalTabButton = styled('a')`
  ${({ theme }) => borderRadius('top', theme.horizontalTabButtonBorderRadius)};
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.horizontalTabButtonColorActive
      : theme.horizontalTabButtonColor};
  background-color: ${({ theme }) => theme.horizontalTabButtonBackgroundColor};
  margin-right: ${({ theme }) => theme.horizontalTabButtonSpacingRight};
  padding: ${({ theme }) => theme.horizontalTabButtonPadding};
  outline-width: 0;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  text-transform: capitalize;
  &:hover {
    text-decoration: none;
  }
  &:active,
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.horizontalTabButtonColorActive};
  }
`;

export default HorizontalTabButton;
