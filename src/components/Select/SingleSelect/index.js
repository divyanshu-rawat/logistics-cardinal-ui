import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SelectPlus from 'react-select-plus';

import SelectStyled from '../../Select';

class SingleSelect extends PureComponent {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    validationState: PropTypes.oneOf([null, 'success', 'warning', 'error']),
    isSearchable: PropTypes.bool,
    isFirst: PropTypes.bool,
    size: PropTypes.string,
    initialValue: PropTypes.string,
  };

  state = {
    selectedValue: this.props.initialValue,
  };

  onChangeTime = (option) => {
    const { name } = this.props;
    this.setState({ selectedValue: option }, () =>
      this.props.onChange({ name, option }),
    );
  };

  render() {
    const {
      size = 'block',
      options,
      name,
      placeholder,
      isSearchable = false,
      isFirst,
      validationState,
    } = this.props;

    const { selectedValue } = this.state;

    return (
      <SelectStyled
        size={size}
        validationState={validationState}
        isFirst={isFirst}
      >
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
      </SelectStyled>
    );
  }
}

export default SingleSelect;
