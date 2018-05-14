import styled from 'styled-components';

export default styled.main`
  background-color: ${(props) => props.theme.colors.bodyBackground};
  font-family: ${(props) => props.theme.fontFamily.default};
  font-size: 12px;
  line-height: 1.42857143;
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100vh;
`;
