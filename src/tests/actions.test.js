import * as constants from '../constants';
import * as actions from '../actions';

describe('Forecast actions', () => {
  it('getForecastAction should return a type of GET_FORECAST', () => {
    const zoneIds = ['bergen$center'];
    const expected = {
      type: constants.GET_FORECAST,
      zoneIds,
      startsAt: undefined,
      endsAt: undefined,
    };
    expect(actions.getForecastAction(zoneIds)).toEqual(expected);
  });

  it('getForecastSuccessAction should return a type of GET_FORECAST_SUCCESS', () => {
    const forecast = {
      actuals: [],
      forecasts: [],
    };
    const expected = {
      type: constants.GET_FORECAST_SUCCESS,
      forecast,
    };
    expect(actions.getForecastSuccessAction(forecast)).toEqual(expected);
  });

  it('getForecastErrorAction should return a type of GET_FORECAST_ERROR', () => {
    const error = {
      message: 'Error',
    };
    const expected = {
      type: constants.GET_FORECAST_ERROR,
      error,
    };
    expect(actions.getForecastErrorAction(error)).toEqual(expected);
  });

  it('getZoneIdsAction should return a type of GET_ZONE_IDS', () => {
    const city = 'bergen';
    const expected = {
      type: constants.GET_ZONE_IDS,
      city,
    };
    expect(actions.getZoneIdsAction(city)).toEqual(expected);
  });

  it('getZoneIdsSuccessAction should return a type of GET_ZONE_IDS_SUCCESS', () => {
    const zones = [
      {
        id: 'zone:bergen$center',
      },
    ];
    const expected = {
      type: constants.GET_ZONE_IDS_SUCCESS,
      zones,
    };
    expect(actions.getZoneIdsSuccessAction(zones)).toEqual(expected);
  });

  it('getZoneIdsErrorAction should return a type of GET_ZONE_IDS_ERROR', () => {
    const error = {
      message: 'Error',
    };
    const expected = {
      type: constants.GET_ZONE_IDS_ERROR,
      error,
    };
    expect(actions.getZoneIdsErrorAction(error)).toEqual(expected);
  });

  it('updateSelectedDaysForAdjustment should return a type of UPDATE_SELECTED_DAYS', () => {
    const payload = { date: {}, dataObj: {} };
    const expected = {
      type: constants.UPDATE_SELECTED_DAYS,
      ...payload,
    };
    expect(actions.updateSelectedDaysForAdjustment(payload)).toEqual(expected);
  });

  it('updateAdjustment should return a type of UPDATE_ADJUSTMENT', () => {
    const dataObj = { adjustment: 10 };
    const expected = {
      type: constants.UPDATE_ADJUSTMENT,
      dataObj,
    };
    expect(actions.updateAdjustment(dataObj)).toEqual(expected);
  });

  it('updateForecastFiltersAction should return a type of UPDATE_FORECAST_FILTERS', () => {
    const dataObject = { starts_at: '09:00:00' };
    const expected = {
      type: constants.UPDATE_FORECAST_FILTERS,
      dataObject,
    };
    expect(actions.updateForecastFiltersAction(dataObject)).toEqual(expected);
  });

  it('updateHistoryFiltersAction should return a type of UPDATE_HISTORY_FILTERS', () => {
    const dataObject = { starts_at: '09:00:00' };
    const expected = {
      type: constants.UPDATE_HISTORY_FILTERS,
      dataObject,
    };
    expect(actions.updateHistoryFiltersAction(dataObject)).toEqual(expected);
  });

  it('getAdjustmentsAction should return a type of GET_ADJUSTMENTS', () => {
    const zoneIds = ['bergen$center'];
    const expected = {
      type: constants.GET_ADJUSTMENTS,
      zoneIds,
    };
    expect(actions.getAdjustmentsAction(zoneIds)).toEqual(expected);
  });

  it('getAdjustmentsSuccessAction should return a type of GET_ADJUSTMENTS_SUCCESS', () => {
    const adjustments = [];
    const expected = {
      type: constants.GET_ADJUSTMENTS_SUCCESS,
      adjustments,
    };
    expect(actions.getAdjustmentsSuccessAction(adjustments)).toEqual(expected);
  });

  it('getAdjustmentsErrorAction should return a type of GET_ADJUSTMENTS_ERROR', () => {
    const error = {
      message: 'Error',
    };
    const expected = {
      type: constants.GET_ADJUSTMENTS_ERROR,
      error,
    };
    expect(actions.getAdjustmentsErrorAction(error)).toEqual(expected);
  });

  it('saveAdjustmentAction should return a type of POST_ADJUSTMENT', () => {
    const data = { adjustment: {}, filters: {} };
    const expected = {
      type: constants.POST_ADJUSTMENT,
      data,
    };
    expect(actions.saveAdjustmentAction(data)).toEqual(expected);
  });

  it('saveAdjustmentSuccessAction should return a type of POST_ADJUSTMENT_SUCCESS', () => {
    const result = {};
    const expected = {
      type: constants.POST_ADJUSTMENT_SUCCESS,
      result,
    };
    expect(actions.saveAdjustmentSuccessAction(result)).toEqual(expected);
  });

  it('saveAdjustmentErrorAction should return a type of POST_ADJUSTMENT_ERROR', () => {
    const error = {
      message: 'Error',
    };
    const expected = {
      type: constants.POST_ADJUSTMENT_ERROR,
      error,
    };
    expect(actions.saveAdjustmentErrorAction(error)).toEqual(expected);
  });

  it('saveAdjustmentStatusAction should return a type of PATCH_ADJUSTMENT', () => {
    const data = { id: 1, value: false };
    const expected = {
      type: constants.PATCH_ADJUSTMENT,
      data,
    };
    expect(actions.saveAdjustmentStatusAction(data)).toEqual(expected);
  });

  it('saveAdjustmentStatusSuccessAction should return a type of PATCH_ADJUSTMENT_SUCCESS', () => {
    const result = {};
    const expected = {
      type: constants.PATCH_ADJUSTMENT_SUCCESS,
      result,
    };
    expect(actions.saveAdjustmentStatusSuccessAction(result)).toEqual(expected);
  });

  it('saveAdjustmentStatusErrorAction should return a type of PATCH_ADJUSTMENT_ERROR', () => {
    const error = {
      message: 'Error',
    };
    const expected = {
      type: constants.PATCH_ADJUSTMENT_ERROR,
      error,
    };
    expect(actions.saveAdjustmentStatusErrorAction(error)).toEqual(expected);
  });
});
