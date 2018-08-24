import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import HorizontalTabContainerStyled from './HorizontalTabContainerStyled';

const HorizontalTabContainerList = ({ options, activeTab }) => (
  <Fragment>
    {options.map(
      (item, key) =>
        activeTab === key && (
          <HorizontalTabContainerStyled
            key={`ComposedHorizontalTabContainer-${item}`}
          >
            {item}
          </HorizontalTabContainerStyled>
        ),
    )}
  </Fragment>
);

HorizontalTabContainerList.propTypes = {
  options: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default HorizontalTabContainerList;
