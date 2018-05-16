import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TotalBarStyled = styled.span`
  color: white;
  position: absolute;
  height: 80%;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background-color: ${({ type, theme }) =>
    type === 'forecast' ? theme.colors.primary100 : theme.colors.grey200};
  width: ${({ width }) => (width > 0 ? `${width}%` : 'auto')};
`;

const TotalNumber = ({ width, type }) => (
  <TotalBarStyled width={width} type={type} />
);

TotalNumber.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default TotalNumber;
