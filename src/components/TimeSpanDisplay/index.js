import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Time from './Time';

const TimeSpanDisplay = ({ startAt, endAt, withSeconds = false }) => (
  <Fragment>
    <Time date={startAt} withSeconds={withSeconds} /> —{' '}
    <Time date={endAt} withSeconds={withSeconds} />
  </Fragment>
);

TimeSpanDisplay.propTypes = {
  startAt: PropTypes.string,
  endAt: PropTypes.string,
  withSeconds: PropTypes.bool,
};

export default TimeSpanDisplay;
