import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SelectPlus from 'react-select-plus';

import Select from '../../Select';

class MultipleSelect extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    initialValue: PropTypes.array,
  };

  state = {
    selectedValue: this.props.initialValue,
  };

  onChange = (option) => {
    this.setState({ selectedValue: option }, () =>
      this.props.onChange({ option }),
    );
  };

  render() {
    const { options, name } = this.props;
    const { selectedValue } = this.state;

    return (
      <Select>
        <SelectPlus
          clearable={false}
          searchable={false}
          name={name}
          multi
          value={selectedValue}
          options={options}
          onChange={this.onChange}
        />
      </Select>
    );
  }
}

export default MultipleSelect;
