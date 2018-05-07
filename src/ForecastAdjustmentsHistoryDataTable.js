import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableHeaderColumn } from 'react-bootstrap-table';
import Switch from 'react-switch';
import moment from 'moment-timezone';

import Table from 'components/Table';
import theme from '../../global-styles/theme';
import { capitalize } from '../../utils';

const StyledSwitch = styled(Switch)`
  margin: 0 auto;
`;

const StyledTable = styled(Table)`
  .react-bs-table table td {
    white-space: normal;
    &:focus,
    &:active {
      outline: 0;
    }
  }
`;

export function formatDate(cell) {
  moment.tz.setDefault('GMT');
  return moment(cell).format('DD.MM.YYYY');
}

export function formatDates(dates) {
  return formatArray(dates.map(formatDate));
}

export function formatTime(cell) {
  moment.tz.setDefault('GMT');
  return moment(cell).format('HH:mm');
}

export function formatArray(cell) {
  return cell.join(', ');
}

export function formatZones(cell) {
  return formatArray(
    cell.map((zone) => {
      const zoneName = zone.split('$')[1];
      return capitalize(zoneName);
    }),
  );
}

export function switchCell(cell, id, onChange) {
  const handleOnChange = (value) => onChange({ value, id });
  return (
    <StyledSwitch
      height={18}
      width={40}
      onColor={theme.brandPrimary}
      offColor={theme.greyDeep}
      onChange={handleOnChange}
      checked={cell}
      uncheckedIcon={false}
      checkedIcon={false}
    />
  );
}

export function ForecastAdjustmentsHistoryDataTable({ data, onStatusToggle }) {
  const renderStatusCell = (cell, row) =>
    switchCell(cell, row.id, onStatusToggle);

  return (
    <StyledTable data={data} pagination={false}>
      <TableHeaderColumn
        isKey
        dataField="zone_ids"
        csvHeader="zone_ids"
        dataFormat={formatZones}
      >
        Zone
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="forecast_dates"
        csvHeader="forecast_dates"
        dataFormat={formatDates}
      >
        Date
      </TableHeaderColumn>
      <TableHeaderColumn dataField="start_time" csvHeader="start_time">
        From Time
      </TableHeaderColumn>
      <TableHeaderColumn dataField="end_time" csvHeader="end_time">
        To Time
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="applies_to"
        csvHeader="version"
        dataFormat={formatArray}
      >
        Version
      </TableHeaderColumn>
      <TableHeaderColumn dataField="adjust_by" csvHeader="adjust_by">
        Adj. %
      </TableHeaderColumn>
      <TableHeaderColumn dataField="reason" csvHeader="reason">
        Reason
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="created_at"
        csvHeader="created"
        dataFormat={formatDate}
      >
        Created at
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="active"
        csvHeader="active"
        dataFormat={renderStatusCell}
      >
        Status
      </TableHeaderColumn>
    </StyledTable>
  );
}

ForecastAdjustmentsHistoryDataTable.propTypes = {
  onStatusToggle: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default ForecastAdjustmentsHistoryDataTable;
