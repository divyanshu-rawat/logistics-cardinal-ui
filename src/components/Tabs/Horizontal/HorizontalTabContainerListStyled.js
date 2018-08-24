import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import HorizontalTabContainerListStyled from './HorizontalTabContainerList';

const HorizontalTabContainerList = ({ options, activeTab }) => (
  <Fragment>
    {options.map(
      (item, key) =>
        activeTab === key && (
          <HorizontalTabContainerListStyled
            key={`ComposedHorizontalTabContainer-${item}`}
          >
            {item}
          </HorizontalTabContainerListStyled>
        ),
    )}
  </Fragment>
);

HorizontalTabContainerList.propTypes = {
  options: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default HorizontalTabContainerList;
