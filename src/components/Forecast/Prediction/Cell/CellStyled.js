import styled from 'styled-components';

export default styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 40px;
  position: relative;
  background-color: ${({ type, theme }) =>
    type === 'forecast' ? theme.colors.grey400 : theme.colors.grey300};
`;
