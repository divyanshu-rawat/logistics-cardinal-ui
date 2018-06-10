import React from 'react';
import PropTypes from 'prop-types';
import { Area as RCArea } from 'recharts';

import { getStrokeWidth } from '../utils';
import { SIZES } from '../../utils/constants';

class Area extends RCArea {
  static propTypes = {
    ...RCArea.propTypes,
    /**
     * Stroke color, which would be a name of a color or an rgb()
     */
    color: PropTypes.string,
    /**
     * Filled color, which would be a name of a color or an rgb()
     */
    bgColor: PropTypes.string,
    /**
     * Size of the line
     */
    size: PropTypes.oneOf(Object.values(SIZES)),
  };

  static defaultProps = {
    ...RCArea.defaultProps,
  };

  render() {
    const { color, bgColor, size, ...props } = this.props;
    const additionalProps = {};

    if (color) {
      additionalProps.stroke = color;
    }

    if (bgColor) {
      additionalProps.fill = bgColor;
    }

    if (size) {
      additionalProps.strokeWidth = getStrokeWidth(size);
    }

    return <RCArea {...props} {...additionalProps} />;
  }
}

export default Area;
