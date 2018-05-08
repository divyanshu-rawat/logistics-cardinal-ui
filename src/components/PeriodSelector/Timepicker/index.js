import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SelectPlus from 'react-select-plus';

import Select from '../../Select';

class Timepicker extends PureComponent {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isSearchable: PropTypes.bool,
    size: PropTypes.string,
    initialValue: PropTypes.string,
  };

  state = {
    selectedValue: this.props.initialValue,
  };

  onChangeTime = (option) => {
    const { name } = this.props;
    this.setState({ selectedValue: option }, () =>
      this.props.onChange({ name, option })
    );
  };

  render() {
    const {
      size = 'small',
      options,
      name,
      placeholder,
      isSearchable = false,
    } = this.props;

    const { selectedValue } = this.state;

    return (
      <Select size={size}>
        <SelectPlus
          joinValues
          clearable={false}
          searchable={isSearchable}
          name={name}
          value={selectedValue}
          placeholder={placeholder}
          options={options}
          onChange={this.onChangeTime}
        />
      </Select>
    );
  }
}

export default Timepicker;
