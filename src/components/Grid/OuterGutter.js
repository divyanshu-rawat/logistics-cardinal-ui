import styled from 'styled-components';

const OuterGutter = styled.section`
  padding: ${({ theme, withPad }) =>
    withPad ? theme.grid.outerGutter : '0px'};
`;

export default OuterGutter;
