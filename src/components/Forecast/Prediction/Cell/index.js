import React from 'react';
import PropTypes from 'prop-types';

import CellStyled from './CellStyled';
import Total from '../Total';
import Percentage from '../Percentage';

const Cell = ({ total, totalOfTheWeek, type }) => (
  <CellStyled type={type}>
    <Total type={type} totalOfTheWeek={totalOfTheWeek} total={total} />
    <Percentage totalOfTheWeek={totalOfTheWeek} total={total} />
  </CellStyled>
);

Cell.propTypes = {
  total: PropTypes.number.isRequired,
  totalOfTheWeek: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['forecast', 'actual']).isRequired,
};

export default Cell;
