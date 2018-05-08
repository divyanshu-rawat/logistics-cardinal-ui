import React from 'react';
import PropTypes from 'prop-types';

import { TableHeaderColumn } from 'react-bootstrap-table';
import Table from '../Table';

export function cellFormatter(dataObj, field) {
  switch (field) {
    case 'date':
      return dataObj.date.format('ddd, MMM Do');
    case 'time':
      return `${dataObj.startTime.substring(
        0,
        5
      )} - ${dataObj.endTime.substring(0, 5)}`;
    case 'originalFC':
      return dataObj.dataObj.value;
    case 'adjustedFC':
      return dataObj.adjustment
        ? dataObj.dataObj.value +
            Math.round(dataObj.dataObj.value * (dataObj.adjustment / 100))
        : '';
    default:
      return '';
  }
}

export function ForecastAdjustmentPreviewTable({
  selectedDays,
  filters,
  adjustment,
}) {
  return (
    <div>
      <Table data={selectedDays} pagination={false}>
        <TableHeaderColumn
          isKey
          dataFormat={(cell, row) => cellFormatter(row, 'date')}
          dataField="date"
          csvHeader="date"
        >
          Date
        </TableHeaderColumn>
        <TableHeaderColumn
          dataFormat={() => cellFormatter(filters, 'time')}
          dataField="time"
          csvHeader="time"
        >
          Time
        </TableHeaderColumn>
        <TableHeaderColumn
          dataFormat={(cell, row) => cellFormatter(row, 'originalFC')}
          dataField="originalFC"
          csvHeader="originalFC"
        >
          Original FC
        </TableHeaderColumn>
        <TableHeaderColumn
          dataFormat={(cell, row) =>
            cellFormatter({ ...row, adjustment }, 'adjustedFC')
          }
          dataField="adjustedFC"
          csvHeader="adjustedFC"
        >
          Adjusted FC
        </TableHeaderColumn>
      </Table>
    </div>
  );
}

ForecastAdjustmentPreviewTable.propTypes = {
  filters: PropTypes.object.isRequired,
  selectedDays: PropTypes.array.isRequired,
  adjustment: PropTypes.number.isRequired,
};

export default ForecastAdjustmentPreviewTable;
