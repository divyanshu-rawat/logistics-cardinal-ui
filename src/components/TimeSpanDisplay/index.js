import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Text from '../Text';
import Time from './Time';

export const TimeSpanDisplay = ({
  fontSize,
  startAt,
  theme,
  endAt,
  withSeconds,
}) => (
  <Text fontSize={fontSize} color={theme.timeSpanDisplayTextColor}>
    <Time date={startAt} withSeconds={withSeconds} /> —{' '}
    <Time date={endAt} withSeconds={withSeconds} />
  </Text>
);

TimeSpanDisplay.propTypes = {
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  fontSize: PropTypes.oneOf(['xsmall', 'small', 'default', 'large', 'xlarge']),
  withSeconds: PropTypes.bool,
};

export default withTheme(TimeSpanDisplay);
