import styled from 'styled-components';

const DrawerStyled = styled('div')`
  height: 100%;
  display: flex;
  flex-flow: column;
  min-width: ${({ width }) => width}px;
  box-shadow: ${({ theme }) => theme.drawerBoxShadow};
  background-color: ${({ theme }) => theme.drawerBackgroundColor};
`;

export default DrawerStyled;
