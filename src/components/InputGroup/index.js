import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const InputGroupStyled = styled('fieldset')`
  display: block;
`;

const InputGroup = ({ children, name, disabled }) => (
  <InputGroupStyled name={name} disabled={disabled}>
    {children}
  </InputGroupStyled>
);

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default InputGroup;
