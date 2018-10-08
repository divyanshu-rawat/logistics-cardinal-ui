import styled from 'styled-components';

const PercentageStyled = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  z-index: 2;
  font-size: 11px;
  color: ${({ theme }) => theme.textColor};
`;

export default PercentageStyled;
