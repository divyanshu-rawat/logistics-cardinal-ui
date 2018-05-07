import * as apis from '../apis';

import requests from '../../../utils/requests';
import config from '../../../utils/config';

// Mock the requests util
jest.mock('../../../utils/requests', () => ({
  get: jest.fn((url) => Promise.resolve({ forecasts: [], actuals: [] })), // eslint-disable-line no-unused-vars
  post: jest.fn((url) => Promise.resolve({ forecasts: [] })), // eslint-disable-line no-unused-vars
  patch: jest.fn((url) => Promise.resolve({ adjustment: {} })), // eslint-disable-line no-unused-vars
}));

describe('Forecast APIs', () => {
  const zoneIds = ['bergen$center'];
  const { city } = 'bergen';

  describe('getForecast', () => {
    it('should send a GET request with zone ids as a param', () => {
      apis.getForecast({ zoneIds });
      expect(requests.get).toHaveBeenLastCalledWith(
        `/forecasts?zone_ids=${encodeURIComponent(zoneIds)}`,
        { baseURL: config.forecastUrl },
      );
    });
  });

  describe('getZoneIds', () => {
    it('should send a GET request with the id as a param', () => {
      apis.getZones({ city });
      expect(requests.get).toHaveBeenLastCalledWith(
        `/collections/${config.country}:master/objects?filter=zone:${city}$*`,
        { baseURL: config.geoUrl },
      );
    });
  });

  describe('getAdjustments', () => {
    it('should send a GET request with zone ids as a param', () => {
      apis.getAdjustments({ zoneIds });
      expect(requests.get).toHaveBeenLastCalledWith(
        `/adjustments?zone_ids=${encodeURIComponent(zoneIds)}`,
        { baseURL: config.forecastUrl },
      );
    });
  });

  describe('postAdjustment', () => {
    it('should send a POST request without params', () => {
      apis.postAdjustment({});
      expect(requests.post).toHaveBeenLastCalledWith('/adjustments', {
        baseURL: config.forecastUrl,
        data: {},
      });
    });
  });

  describe('patchAdjustment', () => {
    it('should send a PATCH request with id and data', () => {
      const data = { id: 1, value: false };
      apis.patchAdjustment(data);
      expect(requests.patch).toHaveBeenLastCalledWith(
        `/adjustments/${data.id}`,
        { baseURL: config.forecastUrl, data: { active: data.value } },
      );
    });
  });
});
