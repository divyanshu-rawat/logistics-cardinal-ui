import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import keyIndex from 'react-key-index';

import TabContainer from './TabContainer';

const TabContainerList = ({ options, activeTab }) => {
  const optionsWithKey = keyIndex([...Array(options.length)], 1);
  return (
    <Fragment>
      {options.map(
        (item, key) =>
          activeTab === key && (
            <TabContainer key={`ComposedTabContainer-${optionsWithKey[key]}`}>
              {item}
            </TabContainer>
          ),
      )}
    </Fragment>
  );
};

TabContainerList.propTypes = {
  options: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default TabContainerList;
