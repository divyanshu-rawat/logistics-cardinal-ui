import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import TabContainer from './TabContainer';

const TabContainerList = ({ options, activeTab }) => (
  <Fragment>
    {options.map(
      (item, key) =>
        activeTab === key && (
          <TabContainer key={`ComposedTabContainer-${shortid.generate()}`}>
            {item}
          </TabContainer>
        ),
    )}
  </Fragment>
);

TabContainerList.propTypes = {
  options: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default TabContainerList;
