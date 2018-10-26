import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import SelectPlus from 'react-select-plus';

import SelectStyled from '../../Select';
import Icons from '../../Icons';
class SingleSelect extends PureComponent {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    validationState: PropTypes.oneOf([null, 'success', 'warning', 'error']),
    isSearchable: PropTypes.bool,
    disabled: PropTypes.bool,
    isFirst: PropTypes.bool,
    size: PropTypes.string,
    initialValue: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
  };

  state = {
    selectedValue: this.props.initialValue,
    isOpen: false,
  };

  componentDidUpdate(nextProps) {
    const { initialValue } = this.props;

    if (!isEqual(nextProps.initialValue, initialValue)) {
      this.onChange(initialValue);
    }
  }

  onChange = (option) => {
    const { name } = this.props;
    this.setState({ selectedValue: option }, () =>
      this.props.onChange({ name, option }),
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
      size = 'block',
      options,
      name,
      placeholder,
      isSearchable = false,
      isFirst,
      validationState,
      disabled,
    } = this.props;

    const { selectedValue, isOpen } = this.state;

    return (
      <SelectStyled
        size={size}
        isOpen={isOpen}
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
          onOpen={this.onOpenSelect}
          onClose={this.onCloseSelect}
          disabled={disabled}
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

export default SingleSelect;
