import React from 'react';
import PropTypes from 'prop-types';

import VerticalWrapperStyled from './VerticalWrapperStyled';
import VerticalTabButtonList from './VerticalTabButtonList';
import VerticalTabContainerList from './VerticalTabContainerList';
import VerticalSidebarStyled from './VerticalSidebarStyled';

const VerticalTabContainer = ({ options, active, onClick }) => (
  <VerticalWrapperStyled>
    <VerticalSidebarStyled>
      <VerticalTabButtonList
        activeTab={active}
        options={Object.keys(options)}
        onClick={onClick}
      />
    </VerticalSidebarStyled>
    <VerticalTabContainerList
      activeTab={active}
      options={Object.values(options)}
    />
  </VerticalWrapperStyled>
);

VerticalTabContainer.propTypes = {
  /**
   * Tab Component Options
   * */
  options: PropTypes.object.isRequired,
  /**
   * Active Tab
   */
  active: PropTypes.number.isRequired,
  /**
   * OnClick fn
   */
  onClick: PropTypes.func.isRequired,
};

export default VerticalTabContainer;
