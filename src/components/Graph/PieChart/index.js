import React from 'react';
import PropTypes from 'prop-types';
import { PieChart as RCPieChart } from 'recharts';

function PieChart({ children, ...props }) {
  return <RCPieChart {...props}>{children}</RCPieChart>;
}

PieChart.propTypes = {
  /**
   * Components placed inside the PieChart
   */
  children: PropTypes.node.isRequired,
};

export default PieChart;
