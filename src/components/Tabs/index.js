import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TabButtonList from './TabButtonList';
import TabContainerList from './TabContainerList';

class ComposedTabs extends PureComponent {
  static propTypes = {
    /** Tab Component Options */
    options: PropTypes.object.isRequired,
  };

  state = {
    active: 0,
  };

  onClick = (id) => () => {
    this.setState({ active: id });
  };

  render() {
    const { options } = this.props;
    const { active } = this.state;

    return (
      <div>
        <TabButtonList
          activeTab={active}
          options={Object.keys(options)}
          onClick={this.onClick}
        />
        <TabContainerList activeTab={active} options={Object.values(options)} />
      </div>
    );
  }
}

export default ComposedTabs;
