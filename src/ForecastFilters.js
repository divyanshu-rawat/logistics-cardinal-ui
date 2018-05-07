import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { createTimeOptions } from './utils';
import StyledSelect, { StyledSelectSmall } from './ForecastStyledSelect';

const StyledDiv = styled('div')`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  .forecast-filters {
    flex-grow: 3;
    > div {
      padding: 6px;
    }
  }
  .forecast-buttons {
    flex-grow: 2;
    > div {
      padding: 6px;
      text-align: right;
      button {
        width: 140px;
        outline-width: 0;
      }
    }
  }
`;

export class ForecastFilters extends Component {
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    onChartsToggle: PropTypes.func.isRequired,
    zoneOptions: PropTypes.array.isRequired,
    initialValues: PropTypes.object.isRequired,
    chartsOpened: PropTypes.bool,
  };

  handleStartTimeChange = (option) => {
    this.props.onFilterChange({ startTime: option.value });
  };

  handleEndTimeChange = (option) => {
    this.props.onFilterChange({ endTime: option.value });
  };

  handleZoneChange = (options) => {
    if (options.length) {
      this.props.onFilterChange({ zoneIds: options.map((opt) => opt.value) });
    }
  };

  alignTimeOptions = () => {
    const { initialValues } = this.props;
    const timeOptions = createTimeOptions();
    return {
      startTimes: timeOptions.map((timeObj) => {
        if (initialValues.endTime > timeObj.value) {
          return timeObj;
        }
        return { ...timeObj, disabled: true };
      }),
      endTimes: timeOptions.map((timeObj) => {
        if (initialValues.startTime < timeObj.value) {
          return timeObj;
        }
        return { ...timeObj, disabled: true };
      }),
    };
  };

  render() {
    const {
      onChartsToggle,
      zoneOptions,
      chartsOpened,
      initialValues,
    } = this.props;
    const timeOptions = this.alignTimeOptions();

    return (
      <StyledDiv>
        <div className="forecast-filters">
          <div>
            <StyledSelectSmall
              searchable={false}
              value={initialValues.startTime}
              name="starts_at"
              title="From time"
              options={timeOptions.startTimes}
              onChange={this.handleStartTimeChange}
              clearable={false}
            />
            <StyledSelectSmall
              searchable={false}
              value={initialValues.endTime}
              name="ends_at"
              title="To time"
              options={timeOptions.endTimes}
              onChange={this.handleEndTimeChange}
              clearable={false}
            />
          </div>
          <div>
            <StyledSelect
              searchable={false}
              value={initialValues.zoneIds}
              name="zones"
              title="Forecast zones"
              options={zoneOptions}
              onChange={this.handleZoneChange}
              multi
              clearable={false}
            />
          </div>
        </div>
        <div className="forecast-buttons">
          {/* Hide the Export CSV button, we will display it again in the future
              <div>
                <Button bsStyle="primary" bsSize="small">
                  Export CSV
                </Button>
              </div>
            */}
          <div>
            <Button bsSize="small" onClick={onChartsToggle}>
              {chartsOpened ? 'Hide' : 'Show'} Graph
            </Button>
          </div>
        </div>
      </StyledDiv>
    );
  }
}

export default ForecastFilters;
