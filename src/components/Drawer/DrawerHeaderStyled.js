import styled from 'styled-components';

const DrawerHeaderStyled = styled('div')`
  min-height: 100px;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.composedSpacings.byte};
`;

export default DrawerHeaderStyled;
