import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import HorizontalTabButtonList from './HorizontalTabButtonList';
import HorizontalTabContainerList from './HorizontalTabContainerList';

const HorizontalTabContainer = ({ options, active, onClick }) => (
  <Fragment>
    <HorizontalTabButtonList
      activeTab={active}
      options={Object.keys(options)}
      onClick={onClick}
    />
    <HorizontalTabContainerList
      activeTab={active}
      options={Object.values(options)}
    />
  </Fragment>
);

HorizontalTabContainer.propTypes = {
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

export default HorizontalTabContainer;
