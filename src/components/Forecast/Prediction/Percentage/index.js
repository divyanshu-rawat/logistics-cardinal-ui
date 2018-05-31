import React from 'react';
import PropTypes from 'prop-types';

import { calculatePercentage } from '../../../utils/index';
import PercentageStyled from './PercentageStyled';

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
