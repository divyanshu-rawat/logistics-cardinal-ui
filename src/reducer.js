import moment from 'moment-timezone';
import cloneDeep from 'lodash/cloneDeep';
import * as constants from './constants';
import {
  createForecastDataStructure,
  formatZoneList,
  updateSelectedDays,
  updateHistory,
} from './utils';

const momentStartDate = moment()
  .utc()
  .startOf('day')
  .subtract(4, 'weeks')
  .startOf('isoWeek');
const momentEndDate = moment()
  .utc()
  .endOf('day')
  .add(2, 'weeks')
  .endOf('isoWeek');

export const forecastData = {
  charts: {},
  tableValues: [],
  weekDates: {},
  biggestOrdersNumber: 0,
  biggestTotalValue: 0,
  colors: {},
};

export const initialState = {
  originalData: {},
  ...forecastData,
  filters: {
    startDate: momentStartDate.format('YYYY-MM-DD'),
    startWeek: momentStartDate.isoWeek(),
    startTime: '09:00:00',
    startFullDate: momentStartDate.toISOString(),
    endDate: momentEndDate.format('YYYY-MM-DD'),
    endWeek: momentEndDate.isoWeek(),
    endTime: '22:30:00',
    endFullDate: momentEndDate.toISOString(),
    zoneIds: [],
  },
  zones: [],
  adjustment: {
    selectedDays: [],
    adjustment: '',
    fixAdjustment: false,
    reason: '',
    reasonDetail: '',
    appliesTo: ['base'],
    loading: false,
    error: null,
  },
  loading: false,
  error: null,
  history: {
    filters: {
      startTime: '00:00:00',
      endTime: '23:59:59',
      zoneIds: [],
    },
    data: [],
    error: null,
    loading: false,
  },
  forecastNeedsUpdate: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_FORECAST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case constants.GET_FORECAST_ERROR: {
      const { error } = action;
      return {
        ...state,
        error,
        loading: false,
      };
    }

    case constants.GET_FORECAST_SUCCESS: {
      const formattedForecast = createForecastDataStructure(
        action.forecast,
        state.filters,
      );
      let updatedSelectedDays;
      // if there are selected days already, they must be updated
      if (state.adjustment.selectedDays.length) {
        updatedSelectedDays = updateSelectedDays(
          formattedForecast.tableValues,
          state.adjustment.selectedDays,
        );
      }
      return {
        ...state,
        loading: false,
        error: null,
        forecastNeedsUpdate: false,
        ...formattedForecast,
        originalData: action.forecast,
        adjustment: {
          ...state.adjustment,
          selectedDays: updatedSelectedDays || state.adjustment.selectedDays,
        },
      };
    }

    case constants.UPDATE_FORECAST_FILTERS: {
      const currentFilters = state.filters;
      const newFilters = { ...currentFilters, ...action.dataObject };

      const formattedForecast = createForecastDataStructure(
        state.originalData,
        newFilters,
      );

      return {
        ...state,
        filters: { ...newFilters },
        ...formattedForecast,
        adjustment: {
          ...state.adjustment,
          selectedDays: [],
        },
      };
    }

    case constants.GET_ZONE_IDS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        zones: formatZoneList(action.zones),
      };

    case constants.GET_ZONE_IDS_ERROR: {
      const { error } = action;
      return {
        ...state,
        error,
        loading: false,
      };
    }

    case constants.UPDATE_SELECTED_DAYS: {
      const { date, dataObj } = action;
      const selectedDays = cloneDeep(state.adjustment.selectedDays);
      let dayExists = false;

      state.adjustment.selectedDays.some((day, index) => {
        if (day.date.isSame(date)) {
          dayExists = true;
          selectedDays.splice(index, 1);
          return true;
        }

        return false;
      });
      if (!dayExists) {
        selectedDays.push({ date, dataObj });
        selectedDays.sort((a, b) => (a.date.isBefore(b.date) ? -1 : 1));
      }

      return { ...state, adjustment: { ...state.adjustment, selectedDays } };
    }

    case constants.UPDATE_ADJUSTMENT:
      return {
        ...state,
        adjustment: { ...state.adjustment, ...action.dataObj },
      };

    case constants.CANCEL_ADJUSTMENT:
      return {
        ...state,
        adjustment: { ...state.adjustment, selectedDays: [] },
      };

    case constants.UPDATE_HISTORY_FILTERS: {
      const currentFilters = state.history.filters;
      const newFilters = { ...currentFilters, ...action.dataObject };

      return {
        ...state,
        history: {
          ...state.history,
          filters: { ...newFilters },
        },
      };
    }

    case constants.GET_ADJUSTMENTS: {
      return {
        ...state,
        history: {
          ...state.history,
          loading: true,
          error: null,
        },
      };
    }
    case constants.GET_ADJUSTMENTS_ERROR: {
      const { error } = action;
      return {
        ...state,
        history: {
          ...state.history,
          loading: false,
          error,
        },
      };
    }

    case constants.GET_ADJUSTMENTS_SUCCESS: {
      return {
        ...state,
        history: {
          ...state.history,
          data: action.adjustments,
        },
      };
    }

    case constants.POST_ADJUSTMENT: {
      return {
        ...state,
        adjustment: {
          ...state.adjustment,
          loading: true,
          error: null,
        },
      };
    }
    case constants.POST_ADJUSTMENT_SUCCESS: {
      const originalData = {
        ...state.originalData,
        forecasts: action.result.forecasts,
      };
      const formattedForecast = createForecastDataStructure(
        originalData,
        state.filters,
      );

      return {
        ...state,
        adjustment: initialState.adjustment,
        originalData,
        ...formattedForecast,
      };
    }

    case constants.POST_ADJUSTMENT_ERROR: {
      return {
        ...state,
        adjustment: {
          ...state.adjustment,
          loading: false,
          error: action.error,
        },
      };
    }

    case constants.PATCH_ADJUSTMENT_SUCCESS: {
      return {
        ...state,
        history: {
          ...state.history,
          data: updateHistory(state.history.data, action.result),
        },
        forecastNeedsUpdate: true,
      };
    }

    case constants.PATCH_ADJUSTMENT_ERROR: {
      return {
        ...state,
        history: {
          ...state.history,
          loading: false,
          error: action.error,
        },
      };
    }

    default:
      return state;
  }
}

export default reducer;
