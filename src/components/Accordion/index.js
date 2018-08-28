import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccordionContext from './Context';

class Accordion extends Component {
  static propTypes = {
    multiple: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    multiple: true,
  };

  state = {};

  onToggleItem = (id) => () => {
    const { multiple } = this.props;

    if (!multiple) {
      const entries = Object.keys(this.state);

      this.setState({
        ...entries.reduce(
          (previous, current) => ({ ...previous, [current]: false }),
          {},
        ),
      });
    }

    this.setState({
      [id]: !this.state[id],
    });
  };

  onRegisterComponent = (id, open = false) => {
    this.setState({ [id]: open });
  };

  render() {
    const { children } = this.props;

    return (
      <AccordionContext.Provider
        value={{
          items: this.state,
          toggleItem: this.onToggleItem,
          registerComponent: this.onRegisterComponent,
        }}
      >
        {children}
      </AccordionContext.Provider>
    );
  }
}

export default Accordion;
