import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import VerticalTabContainerStyled from './VerticalTabContainerStyled';

const VerticalTabContainerList = ({ options, activeTab }) => (
  <Fragment>
    {options.map(
      (item, key) =>
        activeTab === key && (
          <VerticalTabContainerStyled
            key={`ComposedVerticalTabContainer-${item}`}
          >
            {item}
          </VerticalTabContainerStyled>
        ),
    )}
  </Fragment>
);

VerticalTabContainerList.propTypes = {
  options: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default VerticalTabContainerList;
