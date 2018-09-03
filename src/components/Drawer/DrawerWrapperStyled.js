import styled from 'styled-components';

const DrawerStyled = styled('div')`
  position: fixed;
  top: 0;
  width: auto;
  height: 100%;
  outline: 0;
  z-index: ${({ theme }) => theme.zIndex.drawerContent};
  ${({ right }) => {
    if (right) {
      return `right: 0;`;
    }
    return `left: 0;`;
  }};
  > .react-reveal {
    position: relative;
    height: 100%;
  }
`;

export default DrawerStyled;
