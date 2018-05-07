import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_FORECAST,
  GET_ZONE_IDS,
  GET_ADJUSTMENTS,
  POST_ADJUSTMENT,
  PATCH_ADJUSTMENT,
} from './constants';

import {
  getForecast as getForecastAPI,
  getZones as getZonesAPI,
  getAdjustments as getAdjustmentsAPI,
  postAdjustment as postAdjustmentAPI,
  patchAdjustment as patchAdjustmentAPI,
} from './apis';

import * as actions from './actions';
import { createAdjustmentDataObject } from './utils';

/**
 * Get forecast data
 */
export function* getForecast({ zoneIds }) {
  try {
    const forecast = yield call(getForecastAPI, { zoneIds });
    yield put(actions.getForecastSuccessAction(forecast));
  } catch (error) {
    yield put(actions.getForecastErrorAction(error.message));
  }
}

/**
 * Get zone ids per city
 */
export function* getZones({ city }) {
  try {
    const zones = yield call(getZonesAPI, { city });
    yield put(actions.getZoneIdsSuccessAction(zones));
  } catch (error) {
    yield put(actions.getZoneIdsErrorAction(error.message));
  }
}

/**
 * Get adjustments data
 */
export function* getAdjustments({ zoneIds, startsAt, endsAt }) {
  try {
    const adjustments = yield call(getAdjustmentsAPI, {
      zoneIds,
      startsAt,
      endsAt,
    });
    yield put(actions.getAdjustmentsSuccessAction(adjustments.adjustments));
  } catch (error) {
    yield put(actions.getAdjustmentsErrorAction(error.message));
  }
}

/**
 * Post adjustment data
 */
export function* postAdjustment({ data }) {
  try {
    const result = yield call(
      postAdjustmentAPI,
      createAdjustmentDataObject(data),
    );
    yield put(actions.saveAdjustmentSuccessAction(result));
  } catch (error) {
    yield put(actions.saveAdjustmentErrorAction(error.message));
  }
}

/**
 * Post adjustment data
 */
export function* patchAdjustment({ data }) {
  try {
    const result = yield call(patchAdjustmentAPI, data);
    yield put(actions.saveAdjustmentStatusSuccessAction(result.adjustment));
  } catch (error) {
    yield put(actions.saveAdjustmentStatusErrorAction(error.message));
  }
}

/**
 * Setup watches
 */
export default function* rootSaga() {
  yield takeLatest(GET_FORECAST, getForecast);
  yield takeLatest(GET_ZONE_IDS, getZones);
  yield takeLatest(GET_ADJUSTMENTS, getAdjustments);
  yield takeLatest(POST_ADJUSTMENT, postAdjustment);
  yield takeLatest(PATCH_ADJUSTMENT, patchAdjustment);
}
