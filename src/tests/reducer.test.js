import moment from 'moment-timezone';

import forecastReducer, { initialState } from '../reducer';
import * as actions from '../actions';

import { charts, weekDates, tableValues } from './dataBasedOnFixtures';
import forecast from './fixtures.json';
import { createForecastDataStructure, formatZoneList } from '../utils';

describe('forecastReducer', () => {
  localStorage.setItem('city', {
    id: 1,
    name: 'Stockholm',
    unavailability_factor: 150,
    opening_time: '09:00:00',
    closing_time: '21:00:00',
    time_zone: 'Europe/Stockholm',
  });
  it('returns the initial state', () => {
    expect(forecastReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle the getForecastAction correctly', () => {
    const expectedResult = { ...initialState, error: null, loading: true };

    expect(forecastReducer(initialState, actions.getForecastAction())).toEqual(
      expectedResult,
    );
  });

  xit('should handle the getForecastSuccessAction correctly', () => {
    const expectedResult = {
      ...initialState,
      charts,
      weekDates,
      tableValues,
      originalData: forecast,
      biggestOrdersNumber: 67,
      biggestTotalValue: 295,
      colors: {
        'W1-18': '#5981AC',
        'W2-18': '#265C96',
        'W52-17': '#3F9BFC',
      },
    };

    expect(
      forecastReducer(initialState, actions.getForecastSuccessAction(forecast)),
    ).toEqual(expectedResult);
  });

  it('should handle the getForecastErrorAction action correctly', () => {
    const err = {
      message: 'Error',
    };
    const expectedResult = {
      ...initialState,
      error: { message: 'Error' },
    };

    expect(
      forecastReducer(initialState, actions.getForecastErrorAction(err)),
    ).toEqual(expectedResult);
  });

  it('should handle the updateForecastFiltersAction action correctly', () => {
    const filters = {
      zoneId: 'bergen$center',
    };
    const expectedResult = {
      ...initialState,
      filters: { ...initialState.filters, ...filters },
    };

    expect(
      forecastReducer(
        initialState,
        actions.updateForecastFiltersAction(filters),
      ),
    ).toEqual(expectedResult);
  });

  it('should handle the getZoneIdsSuccessAction action correctly', () => {
    const response = [
      {
        id: 'zone:bergen$center',
        fields: {
          name: 'Center',
        },
      },
    ];
    const zones = formatZoneList(response);
    const expectedResult = {
      ...initialState,
      zones,
    };

    expect(
      forecastReducer(initialState, actions.getZoneIdsSuccessAction(response)),
    ).toEqual(expectedResult);
  });

  it('should handle the getZoneIdsErrorAction action correctly', () => {
    const err = {
      message: 'Error',
    };
    const expectedResult = {
      ...initialState,
      error: { message: 'Error' },
    };

    expect(
      forecastReducer(initialState, actions.getZoneIdsErrorAction(err)),
    ).toEqual(expectedResult);
  });

  describe('should handle the updateSelectedDaysForAdjustment action correctly', () => {
    it('if this day wasnt in selectedDays, should be added', () => {
      const payload = { date: {}, dataObj: {} };
      const expectedResult = {
        ...initialState,
        adjustment: {
          ...initialState.adjustment,
          selectedDays: [{ ...payload }],
        },
      };

      expect(
        forecastReducer(
          initialState,
          actions.updateSelectedDaysForAdjustment(payload),
        ),
      ).toEqual(expectedResult);
    });

    it('if this day was already in selectedDays, should be removed', () => {
      const date = moment();
      const state = {
        ...initialState,
        adjustment: {
          ...initialState.adjustment,
          selectedDays: [{ date, dataObj: {} }],
        },
      };
      const payload = { date, dataObj: {} };
      const expectedResult = {
        ...initialState,
        adjustment: {
          ...initialState.adjustment,
          selectedDays: [],
        },
      };

      expect(
        forecastReducer(
          state,
          actions.updateSelectedDaysForAdjustment(payload),
        ),
      ).toEqual(expectedResult);
    });
  });

  it('should handle the updateAdjustment action correctly', () => {
    const dataObj = {
      adjustment: 10,
    };
    const expectedResult = {
      ...initialState,
      adjustment: {
        ...initialState.adjustment,
        ...dataObj,
      },
    };

    expect(
      forecastReducer(initialState, actions.updateAdjustment(dataObj)),
    ).toEqual(expectedResult);
  });

  it('should handle the updateHistoryFiltersAction action correctly', () => {
    const filters = {
      startTime: '09:00:00',
    };
    const expectedResult = {
      ...initialState,
      history: {
        ...initialState.history,
        filters: { ...initialState.history.filters, ...filters },
      },
    };

    expect(
      forecastReducer(
        initialState,
        actions.updateHistoryFiltersAction(filters),
      ),
    ).toEqual(expectedResult);
  });

  it('should handle the getAdjustmentsAction correctly', () => {
    const expectedResult = {
      ...initialState,
      history: {
        ...initialState.history,
        error: null,
        loading: true,
      },
    };

    expect(
      forecastReducer(initialState, actions.getAdjustmentsAction()),
    ).toEqual(expectedResult);
  });

  it('should handle the getAdjustmentsSuccessAction correctly', () => {
    const data = [{ id: 123 }];
    const expectedResult = {
      ...initialState,
      history: {
        ...initialState.history,
        data,
      },
    };

    expect(
      forecastReducer(initialState, actions.getAdjustmentsSuccessAction(data)),
    ).toEqual(expectedResult);
  });

  it('should handle the getAdjustmentsErrorAction action correctly', () => {
    const error = {
      message: 'Error',
    };
    const expectedResult = {
      ...initialState,
      history: {
        ...initialState.history,
        error,
      },
    };

    expect(
      forecastReducer(initialState, actions.getAdjustmentsErrorAction(error)),
    ).toEqual(expectedResult);
  });

  it('should handle the getAdjustmentsSuccessAction correctly', () => {
    const forecasts = [
      {
        id: 7181,
        zone_id: 'bergen$center',
        version: 'base',
        forecast_for: '2018-01-05T10:00:00.000Z',
        adjusted_orders: 229,
      },
    ];
    const originalData = {
      ...initialState.originalData,
      forecasts,
    };
    const expected = {
      ...initialState,
      originalData,
      ...createForecastDataStructure(originalData, initialState.filters),
    };
    expect(
      forecastReducer(
        initialState,
        actions.saveAdjustmentSuccessAction({ forecasts }),
      ),
    ).toEqual(expected);
  });

  it('should handle the getAdjustmentsErrorAction action correctly', () => {
    const error = {
      message: 'Error',
    };
    const expectedResult = {
      ...initialState,
      adjustment: {
        ...initialState.adjustment,
        error,
      },
    };
    expect(
      forecastReducer(initialState, actions.saveAdjustmentErrorAction(error)),
    ).toEqual(expectedResult);
  });

  it('should handle the saveAdjustmentStatusSuccessAction correctly', () => {
    const state = {
      ...initialState,
      history: {
        ...initialState.history,
        data: [
          {
            id: 121212,
            zone_ids: ['bergen$center'],
            applies_to: ['base'],
            adjust_by: 0.3,
          },
        ],
      },
    };
    const data = {
      id: 121212,
      zone_ids: ['bergen$center'],
      applies_to: ['base'],
      adjust_by: 0.35,
    };

    const expected = {
      ...initialState,
      history: {
        ...initialState.history,
        data: [data],
      },
      forecastNeedsUpdate: true,
    };
    expect(
      forecastReducer(state, actions.saveAdjustmentStatusSuccessAction(data)),
    ).toEqual(expected);
  });

  it('should handle the saveAdjustmentStatusErrorAction action correctly', () => {
    const error = {
      message: 'Error',
    };
    const expectedResult = {
      ...initialState,
      history: {
        ...initialState.history,
        error,
      },
    };
    expect(
      forecastReducer(
        initialState,
        actions.saveAdjustmentStatusErrorAction(error),
      ),
    ).toEqual(expectedResult);
  });
});
