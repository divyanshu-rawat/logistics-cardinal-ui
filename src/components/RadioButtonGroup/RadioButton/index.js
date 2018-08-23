import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { RadioButtonGroupContext } from '../Context';
import RadioButton from './RadioButton';

class RadioButtonConsumer extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  };

  render() {
    const { id, label, value } = this.props;

    return (
      <RadioButtonGroupContext.Consumer>
        {({ onChange, selectedValue, inline, name }) => (
          <RadioButton
            id={id}
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            selectedValue={selectedValue}
            inline={inline}
          />
        )}
      </RadioButtonGroupContext.Consumer>
    );
  }
}

export default RadioButtonConsumer;
