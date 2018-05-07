import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import isEqual from 'lodash/isEqual';
import styled from 'styled-components';

import ForecastFilters from './ForecastFilters';
import ForecastChartsTable from './ForecastChartsTable';
import ForecastDataTable from './ForecastDataTable';
import ForecastAdjustmentForm from './ForecastAdjustmentForm';
import ForecastAdjustmentsHistoryFilters from './ForecastAdjustmentsHistoryFilters';
import ForecastAdjustmentsHistoryDataTable from './ForecastAdjustmentsHistoryDataTable';
import {
  getForecastAction,
  updateForecastFiltersAction,
  getZoneIdsAction,
  updateSelectedDaysForAdjustment,
  updateAdjustment,
  updateHistoryFiltersAction,
  getAdjustmentsAction,
  saveAdjustmentAction,
  saveAdjustmentStatusAction,
  cancelAdjustmentAction,
} from './actions';

const StyledTabs = styled(Tabs)`
  margin: 0 15px;
  ul {
    border: 0;
  }
  .nav-tabs > li.active > a,
  .nav-tabs > li > a {
    background: #343941;
    &:hover,
    &:focus {
      background: #343941;
    }
  }
  .nav-tabs > li > a {
    color: ${(props) => props.theme.inactive};
    outline-width: 0;
  }
  .nav-tabs > li.active > a,
  .nav-tabs > li.active > a:active .nav-tabs > li.active > a:focus {
    color: #ffffff;
  }
  & > div {
    background: #343941;
  }
  .horizontal-top-line {
    border-top: 1px solid ${(props) => props.theme.greyLight};
  }
`;

export class Forecast extends Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    getForecastAction: PropTypes.func.isRequired,
    updateForecastFiltersAction: PropTypes.func.isRequired,
    getZoneIdsAction: PropTypes.func.isRequired,
    updateSelectedDaysForAdjustment: PropTypes.func.isRequired,
    updateAdjustment: PropTypes.func.isRequired,
    cancelAdjustmentAction: PropTypes.func.isRequired,
    updateHistoryFiltersAction: PropTypes.func.isRequired,
    getAdjustmentsAction: PropTypes.func.isRequired,
    saveAdjustmentAction: PropTypes.func.isRequired,
    saveAdjustmentStatusAction: PropTypes.func.isRequired,
    tableValues: PropTypes.array.isRequired,
    zones: PropTypes.array.isRequired,
    charts: PropTypes.object.isRequired,
    weekDates: PropTypes.object.isRequired,
    colors: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    selectedCity: PropTypes.object.isRequired,
    adjustment: PropTypes.object.isRequired,
    originalData: PropTypes.object.isRequired,
    biggestOrdersNumber: PropTypes.number.isRequired,
    biggestTotalValue: PropTypes.number.isRequired,
    forecastNeedsUpdate: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: this.getRowWeeks(props.tableValues),
      deselected: [],
      chartsOpened: true,
    };
  }

  componentDidMount() {
    this.props.getZoneIdsAction(this.props.selectedCity.name.toLowerCase());
  }

  componentWillReceiveProps = (nextProps) => {
    // TODO Refactor all of these API calls, for example, all calls regarding the filters should be put in their own onChange functions.
    if (!isEqual(this.props.selectedCity, nextProps.selectedCity)) {
      nextProps.getZoneIdsAction(nextProps.selectedCity.name.toLowerCase());
    }

    if (!isEqual(this.props.zones, nextProps.zones)) {
      const zoneIds = nextProps.zones.map((zone) => zone.value);
      if (zoneIds.length) {
        nextProps.updateForecastFiltersAction({ zoneIds });
        nextProps.updateHistoryFiltersAction({ zoneIds });
      }
    }

    if (!isEqual(this.props.tableValues, nextProps.tableValues)) {
      this.setState({
        selected: this.getRowWeeks(nextProps.tableValues),
        deselected: [],
      });
    }

    if (!isEqual(this.props.filters.zoneIds, nextProps.filters.zoneIds)) {
      nextProps.getForecastAction(nextProps.filters.zoneIds);
    }

    if (!isEqual(this.props.history.filters, nextProps.history.filters)) {
      nextProps.getAdjustmentsAction(
        nextProps.history.filters.zoneIds,
        nextProps.history.filters.startTime,
        nextProps.history.filters.endTime
      );
    }

    if (!this.props.forecastNeedsUpdate && nextProps.forecastNeedsUpdate) {
      nextProps.getForecastAction(nextProps.filters.zoneIds);
    }
  };

  onSelectRow = (week, isSelected) => {
    let selected = this.state.selected.slice();
    let deselected = this.state.deselected.slice();
    if (isSelected) {
      selected.push(week);
      deselected = deselected.filter((weekNr) => week !== weekNr);
    } else {
      selected = selected.filter((weekNr) => week !== weekNr);
      deselected.push(week);
    }
    this.setState({
      selected,
      deselected,
    });
  };

  onSelectAllRows = (isSelected) => {
    const rows = this.props.tableValues;
    let selected = [];
    let deselected = this.getRowWeeks(rows);
    if (isSelected) {
      selected = this.getRowWeeks(rows);
      deselected = [];
    }

    this.setState({ selected, deselected });
  };

  getRowWeeks = (data) => data.map((row) => row.week);

  getChartProps() {
    const { charts, weekDates } = this.props;
    const { deselected } = this.state;
    const sortedDays = Object.keys(charts).sort();

    if (!sortedDays.length) {
      return null;
    }

    const chartData = {
      week: '',
    };

    sortedDays.forEach((day) => {
      const sortedDates = Object.keys(charts[day].dates).sort();

      deselected.forEach((weekNr) => {
        weekDates[weekNr].forEach((date) => {
          const index = sortedDates.indexOf(date);
          if (index > -1) {
            sortedDates.splice(index, 1);
          }
        });
      });

      chartData[day] = {
        sortedDates,
        data: charts[day].data,
        colors: charts[day].dates,
      };
    });

    return chartData;
  }

  handleToggleChartsView = () => {
    this.setState({
      chartsOpened: !this.state.chartsOpened,
    });
  };

  saveAdjustment = () => {
    const { saveAdjustmentAction, adjustment, filters } = this.props;
    saveAdjustmentAction({ adjustment, filters });
  };

  saveAdjustmentStatus = (data) => {
    this.props.saveAdjustmentStatusAction(data);
  };

  render() {
    const {
      tableValues,
      charts,
      filters,
      zones,
      updateForecastFiltersAction,
      biggestOrdersNumber,
      biggestTotalValue,
      colors,
      updateSelectedDaysForAdjustment,
      adjustment,
      updateAdjustment,
      updateHistoryFiltersAction,
      history,
      cancelAdjustmentAction,
    } = this.props;
    const chartData = this.getChartProps();
    const sortedDays = Object.keys(charts).sort();

    const selectRowProp = {
      selected: this.state.selected,
      onSelect: this.onSelectRow,
      onSelectAll: this.onSelectAllRows,
    };

    return (
      <StyledTabs id="tabs" defaultActiveKey={1}>
        <Tab eventKey={1} title="Forecast">
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <ForecastFilters
                  zoneOptions={zones}
                  initialValues={filters}
                  onFilterChange={updateForecastFiltersAction}
                  chartsOpened={this.state.chartsOpened}
                  onChartsToggle={this.handleToggleChartsView}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                {!!chartData &&
                  this.state.chartsOpened && (
                    <ForecastChartsTable
                      chartData={chartData}
                      sortedDays={sortedDays}
                    />
                  )}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <ForecastDataTable
                  colors={colors}
                  biggestOrdersNumber={biggestOrdersNumber}
                  biggestTotalValue={biggestTotalValue}
                  selectRowProp={selectRowProp}
                  tableValues={tableValues}
                  sortedDays={sortedDays}
                  onClickHandler={updateSelectedDaysForAdjustment}
                  selectedDays={adjustment.selectedDays}
                />
              </Col>
            </Row>
            <Row className="horizontal-top-line">
              <Col xs={12}>
                <ForecastAdjustmentForm
                  onSave={this.saveAdjustment}
                  onCancel={cancelAdjustmentAction}
                  adjustment={adjustment}
                  updateAdjustment={updateAdjustment}
                  filters={filters}
                />
              </Col>
            </Row>
          </Grid>
        </Tab>
        <Tab eventKey={2} title="History">
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <ForecastAdjustmentsHistoryFilters
                  onFilterChange={updateHistoryFiltersAction}
                  zoneOptions={zones}
                  {...history.filters}
                />
                <ForecastAdjustmentsHistoryDataTable
                  data={history.data}
                  onStatusToggle={this.saveAdjustmentStatus}
                />
              </Col>
            </Row>
          </Grid>
        </Tab>
      </StyledTabs>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.forecast,
    selectedCity: state.city.selectedCity,
  };
}

export default connect(mapStateToProps, {
  getForecastAction,
  updateForecastFiltersAction,
  getZoneIdsAction,
  updateSelectedDaysForAdjustment,
  updateAdjustment,
  updateHistoryFiltersAction,
  getAdjustmentsAction,
  saveAdjustmentAction,
  saveAdjustmentStatusAction,
  cancelAdjustmentAction,
})(Forecast);
