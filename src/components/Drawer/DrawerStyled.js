import styled from 'styled-components';

const DrawerStyled = styled('div')`
  height: 100%;
  min-width: ${({ width }) => width}px;
  box-shadow: ${({ theme }) => theme.boxShadow.drawer};
  background-color: ${({ theme }) => theme.colors.grey300};
`;

export default DrawerStyled;
