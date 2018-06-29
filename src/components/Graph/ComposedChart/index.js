import React from 'react';
import PropTypes from 'prop-types';
import { ComposedChart as RCComposedChart } from 'recharts';

import { SIZES } from '../../utils/constants';

export function getMarginPixels(size) {
  let pixels;

  switch (size) {
    case SIZES.lg:
      pixels = 30;
      break;
    case SIZES.md:
      pixels = 20;
      break;
    case SIZES.sm:
      pixels = 10;
      break;
    default:
      pixels = 0;
  }

  return { top: pixels, right: pixels, left: pixels, bottom: pixels };
}

function ComposedChart({
  children,
  marginSize,
  data,
  height,
  width,
  gap,
  style,
  ...props
}) {
  const margin = getMarginPixels(marginSize);
  const additionalProps = {};

  if (!gap) {
    additionalProps.style = {
      // Remove the starting gap
      marginLeft: -12,
      ...style,
    };
  }

  return (
    <RCComposedChart
      margin={margin}
      data={data}
      height={height}
      width={width}
      {...additionalProps}
      {...props}
    >
      {children}
    </RCComposedChart>
  );
}

ComposedChart.propTypes = {
  /**
   * Components placed inside the ComposedChart
   */
  children: PropTypes.node.isRequired,
  /**
   * Size of margins applied to four sides of the ComposedChart
   */
  marginSize: PropTypes.oneOf(Object.values(SIZES)).isRequired,
  /**
   * Data passed to children components
   */
  data: PropTypes.array.isRequired,
  /**
   * Height of the component
   */
  height: PropTypes.number.isRequired,
  /**
   * Width of the component
   */
  width: PropTypes.number.isRequired,
  /**
   * Gap on the left of the chart. ComposedChart normally put the left gap by default
   */
  gap: PropTypes.bool.isRequired,
  /**
   * Styles
   */
  style: PropTypes.object,
};

ComposedChart.defaultProps = {
  marginSize: SIZES.xs,
  height: 300,
  width: 1000,
  gap: true,
  style: {},
};

export default ComposedChart;
