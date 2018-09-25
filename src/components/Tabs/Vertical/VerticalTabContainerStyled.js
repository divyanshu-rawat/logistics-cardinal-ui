import styled from 'styled-components';

const VerticalTabContainerStyled = styled.div`
  white-space: initial !important;
  flex: 1;
  padding: ${({ theme }) => theme.verticalTabContainerPadding};
  background-color: ${({ theme }) => theme.verticalTabContainerBackgroundColor};
`;

export default VerticalTabContainerStyled;
