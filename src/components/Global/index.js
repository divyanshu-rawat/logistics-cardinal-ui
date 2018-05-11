import styled from 'styled-components';

export default styled.main`
  font-family: ${(props) => props.theme.fontFamily.default};
  background: inherit;
  font-size: 12px;
  line-height: 1.42857143;
  color: ${(props) => props.theme.colors.white};
`;
