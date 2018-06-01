import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SelectPlus from 'react-select-plus';

import Select from '../../Select';

class MultipleSelect extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    validationState: PropTypes.oneOf([null, 'success', 'warning', 'error']),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    initialValue: PropTypes.array,
  };

  state = {
    selectedValue: this.props.initialValue,
  };

  componentDidMount() {
    const { initialValue } = this.props;

    if (initialValue) {
      this.onChange(initialValue);
    }
  }

  onChange = (option) => {
    this.setState({ selectedValue: option }, () =>
      this.props.onChange({ option }),
    );
  };

  render() {
    const { options, name, placeholder, validationState } = this.props;
    const { selectedValue } = this.state;

    return (
      <Select validationState={validationState}>
        <SelectPlus
          clearable={false}
          searchable={false}
          joinValues
          name={name}
          multi
          value={selectedValue}
          placeholder={placeholder}
          options={options}
          onChange={this.onChange}
        />
      </Select>
    );
  }
}

export default MultipleSelect;
