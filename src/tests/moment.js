// Mock moment date, since momentjs uses Date internally
Date.now = jest.fn(() => new Date(Date.UTC(2018, 10, 10)));

// Mock Moment to always be utc for tests
jest.mock('moment-timezone', () => {
  const moment = require.requireActual('moment-timezone');
  const mockMoment = (date) => moment.utc(date);

  Object.entries(moment).forEach(([key, value]) => {
    mockMoment[key] = value;
  });

  return mockMoment;
});
