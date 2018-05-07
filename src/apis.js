import config from '../../utils/config';
import requests from '../../utils/requests';

function getForecast({ zoneIds }) {
  const query = `zone_ids=${encodeURIComponent(zoneIds)}`;
  return requests.get(`/forecasts?${query}`, { baseURL: config.forecastUrl });
}

function getZones({ city }) {
  const query = `filter=zone:${city}$*`;
  return requests.get(
    `/collections/${config.country}:master/objects?${query}`,
    { baseURL: config.geoUrl },
  );
}

function getAdjustments({ zoneIds, startsAt, endsAt }) {
  const query = `zone_ids=${encodeURIComponent(zoneIds)}${
    startsAt ? `&start_time=${startsAt}` : ''
  }${endsAt ? `&end_time=${endsAt}` : ''}`;
  return requests.get(`/adjustments?${query}`, { baseURL: config.forecastUrl });
}

function postAdjustment(data) {
  return requests.post('/adjustments', { baseURL: config.forecastUrl, data });
}

function patchAdjustment(data) {
  const { id, value } = data;
  return requests.patch(`/adjustments/${id}`, {
    baseURL: config.forecastUrl,
    data: { active: value },
  });
}

export {
  getForecast,
  getZones,
  getAdjustments,
  postAdjustment,
  patchAdjustment,
};
