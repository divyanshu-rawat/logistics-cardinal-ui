import React from 'react';
import PropTypes from 'prop-types';
import SuccessIcon from './svg/success.svg';

const Success = ({ width, height }) => (
  <SuccessIcon width={width} height={height} />
);

Success.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Success;
