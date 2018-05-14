import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

const TimeSpanDisplay = ({ date, withSeconds = false }) => (
  <Fragment>
    {moment(date).format(`${withSeconds ? 'HH:mm:ss' : 'HH:mm'}`)}
  </Fragment>
);

TimeSpanDisplay.propTypes = {
  date: PropTypes.string,
  withSeconds: PropTypes.bool,
};

export default TimeSpanDisplay;
