import styled from 'styled-components';
import { borderRadius } from 'polished';

const TabButton = styled('a')`
  ${({ theme }) => borderRadius('top', theme.borderRadius.mega)};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.grey100};
  background-color: ${({ theme }) => theme.colors.grey300};
  margin-right: ${({ theme }) => theme.spacings.bit};
  padding: ${({ theme }) => theme.composedSpacings.byte};
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
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default TabButton;
