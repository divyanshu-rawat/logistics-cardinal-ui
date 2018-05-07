import { put, call } from 'redux-saga/effects';
import {
  getForecast,
  getZones,
  getAdjustments,
  postAdjustment,
  patchAdjustment,
} from '../sagas';
import * as actions from '../actions';
import * as apis from '../apis';
import { initialState } from '../reducer';

// https://github.com/react-boilerplate/react-boilerplate/commit/7e763894bba85401996ddeffe079bc35c8dd4124
/* eslint-disable redux-saga/yield-effects */
describe('Forecast Sagas', () => {
  describe('getForecast Saga', () => {
    const zoneIds = ['bergen$center'];
    const getForecastGenerator = getForecast({ zoneIds });

    it('should call the getForecast API', () => {
      expect(getForecastGenerator.next().value).toEqual(
        call(apis.getForecast, { zoneIds }),
      );
    });

    it('should dispatch the getForecastSuccessAction on success', () => {
      const response = {
        actuals: [],
        forecasts: [],
      };
      const putDescriptor = getForecastGenerator.next(response).value;
      expect(putDescriptor).toEqual(
        put(actions.getForecastSuccessAction(response)),
      );
    });

    it('should call the getForecastErrorAction action if the response errors', () => {
      const response = new Error('Some error');
      const putDescriptor = getForecastGenerator.throw(response).value;
      expect(putDescriptor).toEqual(
        put(actions.getForecastErrorAction(response.message)),
      );
    });
  });

  describe('getZoneIds Saga', () => {
    const city = 'bergen';
    const getZoneIdsGenerator = getZones({ city });

    it('should call the getZones API', () => {
      expect(getZoneIdsGenerator.next().value).toEqual(
        call(apis.getZones, { city }),
      );
    });

    it('should dispatch the getForecastSuccessAction on success', () => {
      const response = [{ city }];
      const putDescriptor = getZoneIdsGenerator.next(response).value;
      expect(putDescriptor).toEqual(
        put(actions.getZoneIdsSuccessAction(response)),
      );
    });

    it('should call the getForecastErrorAction action if the response errors', () => {
      const response = new Error('Some error');
      const putDescriptor = getZoneIdsGenerator.throw(response).value;
      expect(putDescriptor).toEqual(
        put(actions.getZoneIdsErrorAction(response.message)),
      );
    });
  });

  describe('getAdjustments Saga', () => {
    const zoneIds = ['bergen$center'];
    const getAdjustmentsGenerator = getAdjustments({ zoneIds });

    it('should call the getAdjustments API', () => {
      expect(getAdjustmentsGenerator.next().value).toEqual(
        call(apis.getAdjustments, { zoneIds }),
      );
    });

    it('should dispatch the getAdjustmentsSuccessAction on success', () => {
      const adjustments = [{ id: 123 }];
      const response = {
        adjustments,
      };
      const putDescriptor = getAdjustmentsGenerator.next(response).value;
      expect(putDescriptor).toEqual(
        put(actions.getAdjustmentsSuccessAction(adjustments)),
      );
    });

    it('should call the getAdjustmentsErrorAction action if the response errors', () => {
      const response = new Error('Some error');
      const putDescriptor = getAdjustmentsGenerator.throw(response).value;
      expect(putDescriptor).toEqual(
        put(actions.getAdjustmentsErrorAction(response.message)),
      );
    });
  });

  describe('postAdjustment Saga', () => {
    const data = {
      adjustment: initialState.adjustment,
      filters: initialState.filters,
    };
    const postAdjustmentGenerator = postAdjustment({ data });

    it('should call the postAdjustment API', () => {
      expect(postAdjustmentGenerator.next().value).toEqual(
        call(apis.postAdjustment, {
          adjust_by: '',
          applies_to: ['base'],
          comment: '',
          end_time: '22:30:00',
          fixed: false,
          forecast_dates: [],
          reason: '',
          start_time: '09:00:00',
          zone_ids: [],
        }),
      );
    });

    it('should dispatch the getAdjustmentsSuccessAction on success', () => {
      const result = {
        forecasts: [{ id: 123 }],
      };
      const putDescriptor = postAdjustmentGenerator.next(result).value;
      expect(putDescriptor).toEqual(
        put(actions.saveAdjustmentSuccessAction(result)),
      );
    });

    it('should call the getAdjustmentsErrorAction action if the response errors', () => {
      const response = new Error('Some error');
      const putDescriptor = postAdjustmentGenerator.throw(response).value;
      expect(putDescriptor).toEqual(
        put(actions.saveAdjustmentErrorAction(response.message)),
      );
    });
  });

  describe('patchAdjustment Saga', () => {
    const data = { id: 1, value: false };
    const patchAdjustmentsGenerator = patchAdjustment({ data });

    it('should call the getAdjustments API', () => {
      expect(patchAdjustmentsGenerator.next().value).toEqual(
        call(apis.patchAdjustment, data),
      );
    });

    it('should dispatch the getAdjustmentsSuccessAction on success', () => {
      const adjustment = { id: 123 };
      const response = {
        adjustment,
      };
      const putDescriptor = patchAdjustmentsGenerator.next(response).value;
      expect(putDescriptor).toEqual(
        put(actions.saveAdjustmentStatusSuccessAction(adjustment)),
      );
    });

    it('should call the getAdjustmentsErrorAction action if the response errors', () => {
      const response = new Error('Some error');
      const putDescriptor = patchAdjustmentsGenerator.throw(response).value;
      expect(putDescriptor).toEqual(
        put(actions.saveAdjustmentStatusErrorAction(response.message)),
      );
    });
  });
});
