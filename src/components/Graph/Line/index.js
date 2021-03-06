import React from 'react';
import PropTypes from 'prop-types';
import { Line as RCLine } from 'recharts';

import { getStrokeWidth } from '../utils';
import { SIZES } from '../../utils/constants';

class Line extends RCLine {
  static propTypes = {
    ...RCLine.propTypes,
    /**
     * Stroke color, which would be a name of a color or an rgb()
     */
    color: PropTypes.string,
    /**
     * Stroke dashed style,
     */
    dash: PropTypes.bool,
    /**
     * Size of the line
     */
    size: PropTypes.oneOf(Object.values(SIZES)),
  };

  static defaultProps = {
    ...RCLine.defaultProps,
    dot: false,
  };

  render() {
    const { color, dash, size, ...props } = this.props;
    const additionalProps = {};

    if (dash) {
      additionalProps.strokeDasharray = '3 3';
    }

    if (color) {
      additionalProps.stroke = color;
    }

    if (size) {
      additionalProps.strokeWidth = getStrokeWidth(size);
    }

    return <RCLine {...props} {...additionalProps} />;
  }
}

export default Line;
