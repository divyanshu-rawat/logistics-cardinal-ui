import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Time from './Time';

const TimeSpanDisplay = ({ startAt, endAt, withSeconds }) => (
  <Fragment>
    <Time date={startAt} withSeconds={withSeconds} /> —{' '}
    <Time date={endAt} withSeconds={withSeconds} />
  </Fragment>
);

TimeSpanDisplay.propTypes = {
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired,
  withSeconds: PropTypes.bool,
};

export default TimeSpanDisplay;
