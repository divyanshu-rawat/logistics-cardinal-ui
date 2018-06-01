import styled from 'styled-components';

const SpacingBlockStyled = styled('div')`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
`;

export default SpacingBlockStyled;
