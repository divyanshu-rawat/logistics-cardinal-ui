import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TotalNumberStyled = styled.span`
  color: white;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  z-index: 2;
`;

const TotalNumber = ({ total }) => (
  <TotalNumberStyled>{total}</TotalNumberStyled>
);

TotalNumber.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TotalNumber;
