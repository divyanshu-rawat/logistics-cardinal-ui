import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import HorizontalTabs from './Horizontal';
import VerticalTabs from './Vertical';
class ComposedTabs extends PureComponent {
  static propTypes = {
    /** Tab Component Options */
    options: PropTypes.object.isRequired,
    mode: PropTypes.oneOf(['vertical', 'horizontal']),
  };

  static defaultProps = {
    mode: 'horizontal',
  };

  state = {
    active: 0,
  };

  onClick = (id) => () => {
    this.setState({ active: id });
  };

  render() {
    const { options, mode } = this.props;
    const { active } = this.state;

    switch (mode) {
      case 'vertical':
        return (
          <VerticalTabs
            options={options}
            active={active}
            onClick={this.onClick}
          />
        );
      default:
        return (
          <HorizontalTabs
            options={options}
            active={active}
            onClick={this.onClick}
          />
        );
    }
  }
}

export default ComposedTabs;
