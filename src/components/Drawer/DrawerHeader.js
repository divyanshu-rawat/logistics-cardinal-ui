import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DrawerHeaderStyled from './DrawerHeaderStyled';
import DrawerCloseButton from './DrawerCloseButton';

export const DrawerHeaderElement = styled('div')`
  flex: 1;
`;

export const DrawerHeaderButtonStyled = styled('div')`
  width: 50px;
  text-align: center;
`;

const DrawerHeader = ({ header, onClose }) => (
  <DrawerHeaderStyled>
    <DrawerHeaderElement>{header}</DrawerHeaderElement>
    <DrawerHeaderButtonStyled>
      <DrawerCloseButton onClose={onClose} />
    </DrawerHeaderButtonStyled>
  </DrawerHeaderStyled>
);

DrawerHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  header: PropTypes.node.isRequired,
};

export default DrawerHeader;
