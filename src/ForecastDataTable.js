import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { TableHeaderColumn } from 'react-bootstrap-table';
import styled from 'styled-components';

import Table from 'components/Table';
import StyledRadioInput from './ForecastStyledRadioInput';

const RelativeDiv = styled('div')`
  position: relative;
  padding: 8px;
  display: flex;
  line-height: 22px;
  justify-content: space-between;
  span {
    padding: 5px;
  }
  &.selected {
    border: 1px solid #3f9bfc;
    padding: 7px;
  }
  .percents {
    color: ${(props) => props.theme.inactive};
  }
`;

const RelativeDivForecasts = styled(RelativeDiv)`
  background-color: ${(props) => props.theme.greyDeep};
`;

const RelativeDivActuals = styled(RelativeDiv)`
  background-color: ${(props) => props.theme.greyMedium};
`;

const BarDivActuals = styled('div')`
  position: absolute;
  height: 30px;
  background-color: rgba(150, 162, 176, 0.2);
`;

const BarDivForecasts = styled(BarDivActuals)`
  background-color: rgba(63, 155, 252, 0.3);
`;

const StyledTable = styled(Table)`
  .table > thead > tr > th,
  .table > tbody > tr > td {
    background-color: ${(props) => props.theme.greyMedium};
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
  .table > thead > tr > th {
    padding-left: 8px;
    input {
      margin-top: 13px;
    }
  }
  .react-bs-container-body .table {
    margin-bottom: 20px;
  }
  .table > tbody > tr {
    border-bottom: 1px solid ${(props) => props.theme.greyLight};
  }
  .table > thead > tr {
    border-bottom: 2px solid ${(props) => props.theme.greyLight};
  }
  .react-bs-container-body .table {
    margin-bottom: 25px;
  }
`;

const WeekDiv = styled('div')`
  padding: 8px;
  > div {
    line-height: 30px;
  }
`;

export const cellFormatter = (dataObj, onClickHandler, selectedDays = []) => {
  const { biggestOrdersNumber, week, cell, day } = dataObj;
  const percent = cell.value / biggestOrdersNumber * 100;
  const today = moment().startOf('day');
  const weekYearArray = week.match(/\d+/g);
  const year = `${today.format('YYYY').substr(0, 2)}${weekYearArray[1]}`;
  const isoWeek = parseInt(weekYearArray[0], 10);
  const date = today
    .clone()
    .year(year)
    .isoWeek(isoWeek)
    .startOf('isoWeek');

  if (day) {
    date.day(parseInt(day, 10)).startOf('day');
  } else {
    date.endOf('isoWeek');
  }

  let BarComponent = BarDivActuals;
  let CellComponent = RelativeDivActuals;

  if (date.isSameOrAfter(today)) {
    BarComponent = BarDivForecasts;
    CellComponent = RelativeDivForecasts;
  }

  const cellProps = {};
  if (day) {
    const additionalData = { day, week };
    cellProps.onClick = () =>
      onClickHandler({
        dataObj: { ...cell, ...additionalData },
        date: moment()
          .year(year)
          .isoWeek(isoWeek)
          .day(parseInt(day, 10))
          .startOf('day'),
      });
  }

  selectedDays.some((adj) => {
    if (adj.dataObj.day === day && adj.dataObj.week === week) {
      cellProps.className = 'selected';
      return true;
    }
    // eslint-disable-line no-else-return
    cellProps.className = '';

    return false;
  });

  return (
    <CellComponent {...cellProps}>
      <BarComponent style={{ width: `${percent}%` }} />
      <span>{cell.value}</span>
      <span className="percents">
        {cell.change || cell.change === 0 ? `${Math.round(cell.change)}%` : ''}
      </span>
    </CellComponent>
  );
};

export const weekCellFormatter = (
  cell,
  backgroundColor,
  week,
  selectRowProp,
) => {
  const checked = selectRowProp.selected.indexOf(week) > -1;
  const onChange = (isSelected) => selectRowProp.onSelect(week, isSelected);
  return (
    <WeekDiv>
      <StyledRadioInput
        id={cell}
        label={cell}
        onChange={onChange}
        checked={checked}
        color={backgroundColor}
      />
    </WeekDiv>
  );
};

export function ForecastDataTable(props) {
  const {
    tableValues,
    sortedDays,
    selectRowProp,
    biggestOrdersNumber,
    biggestTotalValue,
    colors,
    onClickHandler,
    selectedDays,
  } = props;

  return (
    <StyledTable data={tableValues} pagination={false}>
      <TableHeaderColumn
        dataAlign="center"
        width="100px"
        isKey
        dataField="week"
        csvHeader="week"
        dataFormat={(cell, row) =>
          weekCellFormatter(cell, colors[row.week], row.week, selectRowProp)
        }
      >
        <StyledRadioInput
          id="allWeeks"
          label="Week"
          color="#6DB324"
          onChange={selectRowProp.onSelectAll}
          checked={selectRowProp.selected.length === tableValues.length}
        />
      </TableHeaderColumn>
      {sortedDays.map((dayNr) => {
        const dayStr = moment()
          .day(dayNr)
          .format('dddd');
        return (
          <TableHeaderColumn
            key={dayNr}
            dataField={dayNr}
            csvHeader={dayStr}
            dataAlign="center"
            dataFormat={(cell, row) =>
              cellFormatter(
                { biggestOrdersNumber, week: row.week, cell, day: dayNr },
                onClickHandler,
                selectedDays,
              )
            }
          >
            {dayStr}
          </TableHeaderColumn>
        );
      })}
      <TableHeaderColumn
        dataAlign="center"
        dataField="total"
        csvHeader="total"
        dataFormat={(cell, row) =>
          cellFormatter({
            biggestOrdersNumber: biggestTotalValue,
            week: row.week,
            cell,
          })
        }
      >
        Total
      </TableHeaderColumn>
    </StyledTable>
  );
}

ForecastDataTable.propTypes = {
  sortedDays: PropTypes.array.isRequired,
  tableValues: PropTypes.array.isRequired,
  selectRowProp: PropTypes.object.isRequired,
  colors: PropTypes.object.isRequired,
  biggestOrdersNumber: PropTypes.number.isRequired,
  biggestTotalValue: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  selectedDays: PropTypes.array.isRequired,
};

export default ForecastDataTable;
