import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Input from '../../Input';
import RadioButtonStyled from './RadioButtonStyled';

class RadioButton extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.any.isRequired,
    inline: PropTypes.bool,
  };

  render() {
    const {
      id,
      inline,
      name,
      onChange,
      selectedValue,
      label,
      value,
    } = this.props;

    return (
      <RadioButtonStyled
        htmlFor={id}
        inline={inline}
        className={classNames({ 'is-selected': value === selectedValue })}
      >
        <Input
          type="radio"
          name={name}
          onChange={onChange}
          value={value}
          checked={value === selectedValue}
        />
        {label}
      </RadioButtonStyled>
    );
  }
}

export default RadioButton;
