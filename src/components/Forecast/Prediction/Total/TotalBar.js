import React from 'react';
import PropTypes from 'prop-types';

import TotalBarStyled from './TotalBarStyled';

const TotalNumber = ({ width, type }) => (
  <TotalBarStyled width={width} type={type} />
);

TotalNumber.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default TotalNumber;
