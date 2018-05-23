import React from 'react';
import { Grid } from 'styled-css-grid';

import OuterGutter from './OuterGutter';

const ComposedGrid = (props) => (
  <OuterGutter>
    <Grid {...props} />
  </OuterGutter>
);

export default ComposedGrid;
