import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import keyIndex from 'react-key-index';

import TabButton from './TabButton';

const TabButtonList = ({ options, activeTab, onClick }) => (
  <Fragment>
    {keyIndex(options, 1).map((item, key) => (
      <TabButton
        key={`ComposedTabButton-${item.id}`}
        isActive={activeTab === key}
        onClick={onClick(key)}
      >
        {item.value}
      </TabButton>
    ))}
  </Fragment>
);

TabButtonList.propTypes = {
  options: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabButtonList;
