import styled from 'styled-components';

const SpinnerOverlay = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.spinnerOverlayBackgroundColor};
  z-index: ${({ theme }) => theme.zIndex.spinnerOverlay};
`;

export default SpinnerOverlay;
