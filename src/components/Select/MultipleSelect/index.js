import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import SelectPlus from 'react-select-plus';

import SelectStyled from '../../Select';
import Icons from '../../Icons';
class MultipleSelect extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    validationState: PropTypes.oneOf([null, 'success', 'warning', 'error']),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    initialValue: PropTypes.array,
  };

  static defaultProps = {
    initialValue: [],
  };

  state = {
    selectedValue: [],
  };

  componentDidMount() {
    const { initialValue } = this.props;

    if (initialValue.length) {
      this.onChange(initialValue);
    }
  }

  componentDidUpdate(nextProps) {
    const { initialValue } = this.props;

    if (!isEqual(nextProps.initialValue, initialValue)) {
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
      <SelectStyled validationState={validationState}>
        <SelectPlus
          clearable={false}
          searchable={false}
          joinValues
          name={name}
          multi
          value={selectedValue}
          placeholder={placeholder}
          options={options}
          arrowRenderer={({ isOpen }) =>
            isOpen ? (
              <Icons.ChevronUp className="Custom-Select-arrow" />
            ) : (
              <Icons.ChevronDown className="Custom-Select-arrow" />
            )
          }
          onChange={this.onChange}
        />
      </SelectStyled>
    );
  }
}

export default MultipleSelect;
