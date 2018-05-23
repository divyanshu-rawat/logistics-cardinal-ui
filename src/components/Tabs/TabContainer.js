import styled from 'styled-components';

const TabContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.composedSpacings.byte};
  background-color: ${({ theme }) => theme.colors.grey300};
`;

export default TabContainer;
