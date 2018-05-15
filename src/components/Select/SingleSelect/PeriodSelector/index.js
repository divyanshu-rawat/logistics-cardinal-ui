import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import Timepicker from '..';

class PeriodSelector extends PureComponent {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    names: PropTypes.array.isRequired,
    placeholders: PropTypes.array.isRequired,
    initialValues: PropTypes.array.isRequired,
  };

  onChangeTime = (element) => {
    const { onChange } = this.props;
    onChange(element);
  };

  render() {
    const {
      options,
      names: [startAtName, endAtName],
      initialValues: [startAtDefault, endAtDefault],
      placeholders: [startAtPlaceholder, endAtPlaceholder],
    } = this.props;

    return (
      <Fragment>
        <Timepicker
          name={startAtName}
          placeholder={startAtPlaceholder}
          options={options}
          onChange={this.onChangeTime}
          initialValue={startAtDefault}
          isFirst
        />
        <Timepicker
          name={endAtName}
          placeholder={endAtPlaceholder}
          options={options}
          onChange={this.onChangeTime}
          initialValue={endAtDefault}
        />
      </Fragment>
    );
  }
}

export default PeriodSelector;
