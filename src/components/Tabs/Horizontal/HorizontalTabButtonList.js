import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import HorizontalTabButtonStyled from './HorizontalTabButtonStyled';

const HorizontalTabButtonList = ({ options, activeTab, onClick }) => (
  <Fragment>
    {options.map((item, key) => (
      <HorizontalTabButtonStyled
        key={`ComposedHorizontalTabButton-${item}`}
        isActive={activeTab === key}
        onClick={onClick(key)}
      >
        {item}
      </HorizontalTabButtonStyled>
    ))}
  </Fragment>
);

HorizontalTabButtonList.propTypes = {
  options: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HorizontalTabButtonList;
