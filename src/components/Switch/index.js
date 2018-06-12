import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RCSwitch from 'react-switch';
import { withTheme } from 'styled-components';

import SwitchStyled from './SwitchStyled';

import { SIZES } from '../utils/constants';

const DIMENSIONS = {
  sm: {
    width: 40,
    height: 22,
  },
  md: {
    width: 80,
    height: 42,
  },
  lg: {
    width: 110,
    height: 62,
  },
};

class Switch extends Component {
  static propTypes = {
    /** current theme -- by context */
    theme: PropTypes.object.isRequired,
    /** initial value */
    initialValue: PropTypes.bool.isRequired,
    /** onChange callback */
    onChangeStatus: PropTypes.func.isRequired,
    /** Dimensions */
    size: PropTypes.oneOf(Object.keys(SIZES)),
    /** HTML id */
    id: PropTypes.string,
    /** Receives (active) param (active) => active ? 'on' : 'off' */
    labelText: PropTypes.func,
    /** Switcher ON and OFF colors */
    colors: PropTypes.shape({
      on: PropTypes.string,
      off: PropTypes.string,
    }),
  };

  static defaultProps = {
    size: 'sm',
    initialValue: false,
    colors: {},
  };

  state = {
    active: this.props.initialValue,
  };

  onChangeSwitch = (value) => {
    const { onChangeStatus } = this.props;
    this.setState({ active: !this.state.active }, () => onChangeStatus(value));
  };

  render() {
    const { theme, size, colors, labelText, id } = this.props;
    const { active } = this.state;
    const onColor = colors.on || theme.colors.primary100;
    const offColor = colors.off || theme.colors.grey400;
    const { width, height } = DIMENSIONS[size];

    return (
      <SwitchStyled active={active}>
        {labelText && <label htmlFor={id}>{labelText(active)}</label>}
        <RCSwitch
          id={id}
          height={height}
          width={width}
          onColor={onColor}
          offColor={offColor}
          onChange={this.onChangeSwitch}
          checked={active}
          activeBoxShadow={theme.boxShadow.switchHandler}
          className="react-switch"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </SwitchStyled>
    );
  }
}

export default withTheme(Switch);
