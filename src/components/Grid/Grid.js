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
  withPad: PropTypes.bool,
};

ComposedGrid.defaultProps = {
  withPad: false,
};

export default ComposedGrid;
