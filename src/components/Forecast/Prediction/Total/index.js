import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { calculatePercentage } from '../../../utils/index';

import TotalBar from './TotalBar';
import TotalNumber from './TotalNumber';

const Total = ({ type, total, totalOfTheWeek }) => (
  <Fragment>
    <TotalBar
      type={type}
      width={Math.round(calculatePercentage(totalOfTheWeek, total))}
    />
    <TotalNumber total={total} />
  </Fragment>
);

Total.propTypes = {
  total: PropTypes.number.isRequired,
  totalOfTheWeek: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['forecast', 'actual']).isRequired,
};

export default Total;
