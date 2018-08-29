import styled from 'styled-components';

const IDCardStyled = styled('div')`
  display: flex;
  flex-flow: row;
  align-items: center;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export default IDCardStyled;
