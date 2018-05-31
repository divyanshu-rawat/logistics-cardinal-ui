import React from 'react';
import PropTypes from 'prop-types';

// Using bootstrap .form-control for now.
// However, the plan is to get rid of it in the future
const Input = ({ inputRef, placeholder, ...props }) => (
  <input
    className="form-control"
    // this is necessary to cover the <MaskedInput /> case
    {...(typeof inputRef === 'function'
      ? { ref: (input) => inputRef(input) }
      : inputRef)}
    placeholder={placeholder}
    {...props}
  />
);

Input.propTypes = {
  /** The inputRef, it's necessary to cover <MaskedInput /> case */
  inputRef: PropTypes.any,
  /** For instance, DD.MM.YYYY */
  placeholder: PropTypes.string,
};

export default Input;
