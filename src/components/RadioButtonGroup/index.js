import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RadioButtonGroupContext } from './Context';

class RadioButtonGroup extends Component {
  static propTypes = {
    /**
     * Name of the radio group
     */
    name: PropTypes.string.isRequired,
    /**
     * Selected Value, managed by the parent state
     */
    selectedValue: PropTypes.any.isRequired,
    /**
     * Callback Action
     */
    onChange: PropTypes.func.isRequired,
    /**
     * List of <RadioButtons />
     */
    children: PropTypes.node.isRequired,
    /**
     * Display elements inline, default is block
     */
    inline: PropTypes.bool,
  };

  handleChange = (event) => {
    this.props.onChange(event);
  };

  render() {
    const { onChange, selectedValue, name, inline, children } = this.props;
    const contextValues = {
      onChange,
      name,
      inline,
      selectedValue,
    };

    return (
      <RadioButtonGroupContext.Provider value={{ ...contextValues }}>
        {children}
      </RadioButtonGroupContext.Provider>
    );
  }
}

export default RadioButtonGroup;
