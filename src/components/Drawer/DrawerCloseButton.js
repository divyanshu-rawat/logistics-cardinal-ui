import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icons from '../Icons';

export const DrawerCloseButtonStyled = styled('a')`
  cursor: pointer;
`;

const DrawerCloseButton = ({ onClose }) => (
  <DrawerCloseButtonStyled onClick={onClose}>
    <Icons.Close className="Close" />
  </DrawerCloseButtonStyled>
);

DrawerCloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DrawerCloseButton;
