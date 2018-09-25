import styled from 'styled-components';

export default styled('main')`
  background-color: ${(props) => props.theme.bodyBackground};
  font-family: ${(props) => props.theme.textFontFamily};
  font-size: 12px;
  line-height: 1.42857143;
  color: ${(props) => props.theme.textColor};
  width: 100%;
  height: 100vh;
`;
