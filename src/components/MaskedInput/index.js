import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

import Input from '../Input';

const InputMask = ({
  guide,
  mask,
  placeholder,
  id,
  value,
  onChange,
  onBlur,
}) => (
  <MaskedInput
    mask={mask}
    guide={guide}
    placeholder={placeholder}
    value={value}
    id={id}
    onChange={onChange}
    onBlur={onBlur}
    render={(ref, props) => <Input inputRef={ref} {...props} />}
  />
);

InputMask.propTypes = {
  /** Mask can be Array or Func. Check `react-text-mask` for more info about it */
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  /** input id */
  id: PropTypes.string.isRequired,
  /** onChange callback, if you are using redux-form it's going likely to be `input.change` */
  onChange: PropTypes.func.isRequired,
  /** input value */
  value: PropTypes.any,
  /** onBlur callback */
  onBlur: PropTypes.func,
  /** input placeholder */
  placeholder: PropTypes.string,
  /** Set if mask will guide the user or not. */
  guide: PropTypes.bool,
};

export default InputMask;
