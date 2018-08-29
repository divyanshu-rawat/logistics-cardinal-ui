import styled from 'styled-components';

const VerticalTabButtonStyled = styled('a')`
  height: 44px;
  display: flex;
  flex-flow: row;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.grey700};
  margin-right: ${({ theme }) => theme.spacings.bit};
  padding: ${({ theme }) => theme.composedSpacings.byte};
  outline-width: 0;
  // it's necessary due to react-bootstrap-table specifity collison
  text-decoration: none !important;
  cursor: pointer;
  text-transform: capitalize;
  &:not(:first-child) {
    margin-top: 2px;
  }
  &:hover {
    text-decoration: none;
  }
  &:active,
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.grey800};
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    background-color: ${({ theme }) => theme.colors.primary100};
    transition: opacity 0.3s;
  }
`;

export default VerticalTabButtonStyled;
