import React from 'react';
import PropTypes from 'prop-types';

import IndicatorStyled from './IndicatorStyled';
import Checkbox from '..';

const Indicator = (props) => (
  <IndicatorStyled color={props.color}>
    <Checkbox {...props} />
  </IndicatorStyled>
);

Indicator.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.bool,
  color: PropTypes.string,
};

export default Indicator;
