import styled from 'styled-components';

const VerticalTabContainerStyled = styled.div`
  white-space: initial !important;
  padding: ${({ theme }) => theme.composedSpacings.byte};
  background-color: ${({ theme }) => theme.colors.grey300};
`;

export default VerticalTabContainerStyled;
