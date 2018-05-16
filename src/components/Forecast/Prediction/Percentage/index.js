import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { calculatePercentage } from '../../../utils/index';

const PercentageStyled = styled.span`
  color: white;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  z-index: 2;
`;

const Percentage = ({ total, totalOfTheWeek }) => (
  <PercentageStyled>
    {Math.round(calculatePercentage(totalOfTheWeek, total))}%
  </PercentageStyled>
);

Percentage.propTypes = {
  total: PropTypes.number.isRequired,
  totalOfTheWeek: PropTypes.number.isRequired,
};

export default Percentage;
