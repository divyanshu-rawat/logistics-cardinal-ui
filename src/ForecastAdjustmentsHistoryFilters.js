import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createTimeOptions } from './utils';
import StyledSelect, { StyledSelectSmall } from './ForecastStyledSelect';

const StyledDiv = styled('div')`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  .history-filters {
    flex-grow: 1;
    > div {
      padding: 6px;
    }
  }
`;

const alignTimeOptions = ({ startTime, endTime, timeOptions }) => ({
  startTimes: timeOptions.map((timeObj) => {
    if (endTime > timeObj.value) {
      return timeObj;
    }
    return { ...timeObj, disabled: true };
  }),
  endTimes: timeOptions.map((timeObj) => {
    if (startTime < timeObj.value) {
      return timeObj;
    }
    return { ...timeObj, disabled: true };
  }),
});

export function ForecastAdjustmentsHistoryFilters({
  onFilterChange,
  zoneOptions,
  startTime,
  endTime,
  zoneIds,
}) {
  const handleStartTimeChange = (option) => {
    onFilterChange({ startTime: option.value });
  };

  const handleEndTimeChange = (option) => {
    onFilterChange({ endTime: option.value });
  };

  const handleZoneChange = (options) => {
    if (options.length) {
      onFilterChange({ zoneIds: options.map((opt) => opt.value) });
    }
  };

  const timeOptions = createTimeOptions();
  const alignedTimeOptions = alignTimeOptions({
    startTime,
    endTime,
    timeOptions,
  });

  return (
    <StyledDiv>
      <div className="history-filters">
        <div>
          <StyledSelectSmall
            searchable={false}
            value={startTime}
            name="starts_at"
            title="From time"
            options={alignedTimeOptions.startTimes}
            onChange={handleStartTimeChange}
            clearable={false}
          />
          <StyledSelectSmall
            searchable={false}
            value={endTime}
            name="ends_at"
            title="To time"
            options={alignedTimeOptions.endTimes}
            onChange={handleEndTimeChange}
            clearable={false}
          />
        </div>
        <div>
          <StyledSelect
            searchable={false}
            value={zoneIds}
            name="zones"
            title="Forecast zones"
            options={zoneOptions}
            onChange={handleZoneChange}
            multi
            clearable={false}
          />
        </div>
      </div>
    </StyledDiv>
  );
}

ForecastAdjustmentsHistoryFilters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  zoneOptions: PropTypes.array.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  zoneIds: PropTypes.array.isRequired,
};

export default ForecastAdjustmentsHistoryFilters;
