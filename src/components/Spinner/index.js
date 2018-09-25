import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-md-spinner';
import { withTheme } from 'styled-components';

import SpinnerOverlay from './Overlay';
import SpinnerHolder from './Holder';
import SpinnerWrapper from './Wrapper';

const Spinner = ({ theme, size, children, spinWhen }) => (
  <SpinnerWrapper>
    {spinWhen && (
      <Fragment>
        <SpinnerOverlay />
        <SpinnerHolder>
          <Loader singleColor={theme.primaryColor} size={size} />
        </SpinnerHolder>
      </Fragment>
    )}
    {children}
  </SpinnerWrapper>
);

Spinner.propTypes = {
  theme: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  spinWhen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Spinner.defaultProps = {
  size: 50,
};

export default withTheme(Spinner);
