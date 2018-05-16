import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

const Prediction = (props) => <Cell {...props} />;

Prediction.propTypes = {
  /** Total of the day */
  total: PropTypes.number.isRequired,
  totalOfTheWeek: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['forecast', 'actual']).isRequired,
};

export default Prediction;
