import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled('div')`
  display: inline-block;
  [type='checkbox']:checked,
  [type='checkbox']:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type='checkbox']:checked + label,
  [type='checkbox']:not(:checked) + label {
    position: relative;
    padding-left: 20px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
  }
  [type='checkbox']:checked + label:before,
  [type='checkbox']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 4px;
    top: 6px;
    width: 8px;
    height: 8px;
    border: 1px solid ${(props) => props.theme.greyLight};
    border-radius: 100%;
    background: ${(props) => props.theme.greyDeep};
  }
  [type='checkbox']:checked + label:after,
  [type='checkbox']:not(:checked) + label:after {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    top: 6px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type='checkbox']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type='checkbox']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export class StyledRadioInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

  handleChange = (event) => {
    this.props.onChange(event.target.checked);
  };

  render() {
    const StyledDivWithColors = styled(StyledDiv)`
      [type='checkbox']:checked + label:after,
      [type='checkbox']:not(:checked) + label:after {
        background: ${this.props.color || '#ff0000'};
        border: 1px solid ${this.props.color || '#ff0000'};
      }
    `;

    return (
      <StyledDivWithColors>
        <input
          id={this.props.id}
          type="checkbox"
          onChange={this.handleChange}
          checked={this.props.checked}
        />
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </StyledDivWithColors>
    );
  }
}

export default StyledRadioInput;
