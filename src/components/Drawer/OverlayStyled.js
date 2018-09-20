import styled from 'styled-components';

const OverlayStyled = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.drawerOverlay};
  transition: ${({ theme }) => theme.transitions.overlayTransition};
  background-color: ${({ theme }) => theme.overlayColor};
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`;

export default OverlayStyled;
