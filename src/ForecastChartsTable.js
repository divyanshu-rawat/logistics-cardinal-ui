import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import styled from 'styled-components';
import { TableHeaderColumn } from 'react-bootstrap-table';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

import Table from 'components/Table';

const TableWithoutOverflow = styled(Table)`
  overflow: inherit !important;
  .react-bs-container-body {
    overflow: inherit !important;
  }
  .table > tbody > tr > td {
    padding: 0;
    outline: 0;
    border-right: 1px solid ${(props) => props.theme.greyLight};
    &:last-child {
      border: 0;
    }
    &:first-child {
      border-right-width: 2px;
    }
    &:focus,
    &:active {
      outline: 0;
    }
  }
  .charts_cell {
    overflow: inherit !important;
    background-image: linear-gradient(
      to top,
      ${(props) => props.theme.greyMedium},
      ${(props) => props.theme.greyDeep}
    );
  }
  .recharts-tooltip-wrapper {
    z-index: 1000;
  }
`;

export class ForecastChartsTable extends Component {
  static propTypes = {
    chartData: PropTypes.object.isRequired,
    sortedDays: PropTypes.array.isRequired,
  };

  state = {
    cellWidth: 0,
  };

  componentDidMount() {
    this.setState({ cellWidth: this.chartDiv.offsetWidth }); // eslint-disable-line react/no-did-mount-set-state
  }

  chartFormatter = (cell, width) => (
    <LineChart width={width} height={width} data={cell.data}>
      <XAxis dataKey="formattedTime" hide />
      <Tooltip wrapperStyle={{ backgroundColor: '#343941', left: '-120px' }} />
      {cell.sortedDates.map((date) => (
        <Line
          key={`${date}${cell.data.formattedTime}`}
          type="natural"
          dot={false}
          dataKey={date}
          stroke={cell.colors[date].lineColor}
        />
      ))}
    </LineChart>
  );

  cellFormatter = (cell) => (
    <div
      ref={(element) => {
        this.chartDiv = element;
      }}
      className="chart-container"
    >
      {this.state.cellWidth && this.chartFormatter(cell, this.state.cellWidth)}
    </div>
  );

  render() {
    const { chartData, sortedDays } = this.props;
    return (
      <TableWithoutOverflow
        data={[chartData]}
        pagination={false}
        tableHeaderClass="hidden"
      >
        <TableHeaderColumn
          width="100px"
          isKey
          dataField="week"
          columnClassName="charts_cell"
          csvHeader="week"
        >
          Week
        </TableHeaderColumn>
        {sortedDays.map((dayNr) => {
          const dayStr = moment()
            .day(dayNr)
            .format('ddd');
          return (
            <TableHeaderColumn
              key={dayNr}
              dataField={dayNr}
              csvHeader={dayStr}
              dataFormat={this.cellFormatter}
              columnClassName="charts_cell"
            >
              {dayStr}
            </TableHeaderColumn>
          );
        })}
        <TableHeaderColumn
          dataField="total"
          columnClassName="charts_cell"
          csvHeader="total"
        >
          Total
        </TableHeaderColumn>
      </TableWithoutOverflow>
    );
  }
}

export default ForecastChartsTable;
