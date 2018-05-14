import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SelectPlus from 'react-select-plus';

import Select from '../Select';

class ZoneSelector extends PureComponent {
  state = {
    selectedValue: this.props.initialValue,
  };

  onChange = (option) => {
    this.setState({ selectedValue: option }, () =>
      this.props.onChangeZone({ option })
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

ZoneSelector.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChangeZone: PropTypes.func.isRequired,
  initialValue: PropTypes.array,
};

export default ZoneSelector;
