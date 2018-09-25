import styled from 'styled-components';

const HorizontalTabContainerStyled = styled('div')`
  width: 100%;
  padding: ${({ theme }) => theme.horizontalTabContainerPadding};
  background-color: ${({ theme }) =>
    theme.horizontalTabContainerBackgroundColor};
`;

export default HorizontalTabContainerStyled;
