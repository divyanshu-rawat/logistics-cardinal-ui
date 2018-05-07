import * as constants from './constants';

export function getForecastAction(zoneIds) {
  return {
    type: constants.GET_FORECAST,
    zoneIds,
  };
}

export function getForecastSuccessAction(forecast) {
  return {
    type: constants.GET_FORECAST_SUCCESS,
    forecast,
  };
}

export function getForecastErrorAction(error) {
  return {
    type: constants.GET_FORECAST_ERROR,
    error,
  };
}

export function updateForecastFiltersAction(dataObject) {
  return {
    type: constants.UPDATE_FORECAST_FILTERS,
    dataObject,
  };
}

export function updateHistoryFiltersAction(dataObject) {
  return {
    type: constants.UPDATE_HISTORY_FILTERS,
    dataObject,
  };
}

export function getZoneIdsAction(city) {
  return {
    type: constants.GET_ZONE_IDS,
    city,
  };
}

export function getZoneIdsSuccessAction(zones) {
  return {
    type: constants.GET_ZONE_IDS_SUCCESS,
    zones,
  };
}

export function getZoneIdsErrorAction(error) {
  return {
    type: constants.GET_ZONE_IDS_ERROR,
    error,
  };
}

export function updateSelectedDaysForAdjustment({ date, dataObj }) {
  return {
    type: constants.UPDATE_SELECTED_DAYS,
    date,
    dataObj,
  };
}

export function updateAdjustment(dataObj) {
  return {
    type: constants.UPDATE_ADJUSTMENT,
    dataObj,
  };
}

export function getAdjustmentsAction(zoneIds, startsAt, endsAt) {
  return {
    type: constants.GET_ADJUSTMENTS,
    zoneIds,
    startsAt,
    endsAt,
  };
}

export function getAdjustmentsSuccessAction(adjustments) {
  return {
    type: constants.GET_ADJUSTMENTS_SUCCESS,
    adjustments,
  };
}

export function getAdjustmentsErrorAction(error) {
  return {
    type: constants.GET_ADJUSTMENTS_ERROR,
    error,
  };
}

export function saveAdjustmentAction(data) {
  return {
    type: constants.POST_ADJUSTMENT,
    data,
  };
}

export function saveAdjustmentSuccessAction(result) {
  return {
    type: constants.POST_ADJUSTMENT_SUCCESS,
    result,
  };
}

export function saveAdjustmentErrorAction(error) {
  return {
    type: constants.POST_ADJUSTMENT_ERROR,
    error,
  };
}

export function cancelAdjustmentAction() {
  return {
    type: constants.CANCEL_ADJUSTMENT,
  };
}

export function saveAdjustmentStatusAction(data) {
  return {
    type: constants.PATCH_ADJUSTMENT,
    data,
  };
}

export function saveAdjustmentStatusSuccessAction(result) {
  return {
    type: constants.PATCH_ADJUSTMENT_SUCCESS,
    result,
  };
}

export function saveAdjustmentStatusErrorAction(error) {
  return {
    type: constants.PATCH_ADJUSTMENT_ERROR,
    error,
  };
}
