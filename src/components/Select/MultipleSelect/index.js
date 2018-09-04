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
    size: PropTypes.string,
    placeholder: PropTypes.string,
    isSearchable: PropTypes.bool,
    initialValue: PropTypes.array,
  };

  static defaultProps = {
    initialValue: [],
    size: 'block',
  };

  state = {
    selectedValue: [],
    isOpen: false,
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

  onOpenSelect = () => {
    this.setState({ isOpen: true });
  };

  onCloseSelect = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const {
      options,
      name,
      placeholder,
      validationState,
      isSearchable,
      size,
    } = this.props;

    const { selectedValue, isOpen } = this.state;

    return (
      <SelectStyled
        size={size}
        isOpen={isOpen}
        validationState={validationState}
      >
        <SelectPlus
          clearable={false}
          searchable={isSearchable}
          joinValues
          name={name}
          multi
          value={selectedValue}
          placeholder={placeholder}
          onOpen={this.onOpenSelect}
          onClose={this.onCloseSelect}
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
