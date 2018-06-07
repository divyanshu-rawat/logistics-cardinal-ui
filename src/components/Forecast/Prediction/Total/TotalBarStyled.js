import styled from 'styled-components';
import { transitions } from 'polished';

const TotalBarStyled = styled.span`
  color: white;
  position: absolute;
  height: 25px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: ${({ type, theme }) =>
    type === 'forecast' ? theme.colors.primary300 : theme.colors.primary500};
  width: ${({ width }) => (width > 0 ? `${width}%` : 'auto')};
  ${transitions('width .5s ease-in-out .5s')};
`;

export default TotalBarStyled;
