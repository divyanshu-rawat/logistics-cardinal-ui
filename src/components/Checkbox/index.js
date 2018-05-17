import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    initialValue: PropTypes.bool,
  };

  state = {
    selectedValue: this.props.initialValue || false,
  };

  handleChange = (event) => {
    event.persist();

    this.setState({ selectedValue: !this.state.selectedValue }, () =>
      this.props.onChange(event.target.checked),
    );
  };

  render() {
    const { selectedValue } = this.state;
    const { id, label, name } = this.props;

    return (
      <Fragment>
        <input
          id={id}
          name={name}
          type="checkbox"
          onChange={this.handleChange}
          checked={selectedValue}
        />
        <label htmlFor={id}>{label}</label>
      </Fragment>
    );
  }
}

export default Checkbox;
