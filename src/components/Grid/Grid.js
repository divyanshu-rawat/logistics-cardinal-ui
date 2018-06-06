import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'styled-css-grid';

import OuterGutter from './OuterGutter';

const ComposedGrid = (props) => (
  <OuterGutter withPad={props.withPad}>
    <Grid {...props} />
  </OuterGutter>
);

ComposedGrid.propTypes = {
  gap: PropTypes.string.isRequired,
  withPad: PropTypes.bool,
};

ComposedGrid.defaultProps = {
  gap: '10px',
  withPad: false,
};

export default ComposedGrid;
