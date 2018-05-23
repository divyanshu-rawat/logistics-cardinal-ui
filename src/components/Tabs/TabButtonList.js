import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import TabButton from './TabButton';

const TabButtonList = ({ options, activeTab, onClick }) => (
  <Fragment>
    {options.map((item, key) => (
      <TabButton
        key={`ComposedTabButton-${shortid.generate()}`}
        isActive={activeTab === key}
        onClick={onClick(key)}
      >
        {item}
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
