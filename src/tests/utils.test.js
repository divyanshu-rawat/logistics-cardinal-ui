import { noop } from 'lodash';
import moment from 'moment-timezone';

import { forecastData } from '../reducer';
import * as utils from '../utils';
import fixtures from './fixtures.json';
import * as transformedFixtures from './dataBasedOnFixtures';

describe('Forecast utils', () => {
  localStorage.setItem('city', {
    id: 1,
    name: 'Stockholm',
    unavailability_factor: 150,
    opening_time: '09:00:00',
    closing_time: '21:00:00',
    time_zone: 'Europe/Stockholm',
  });
  describe('prepareForecastDataStructure', () => {
    describe('for actuals', () => {
      const partResults = utils.prepareForecastDataStructure(
        {
          dataArray: fixtures.actuals,
          dateFieldName: 'ordered_at',
          ordersFieldName: 'orders',
          dateCondition: noop,
          startTime: '00:00:00',
          endTime: '23:59:59',
        },
        { ...forecastData, timeIndexHelper: {} },
      );

      xit('should return proper structure', () => {
        expect(Object.keys(partResults).sort()).toEqual([
          'biggestOrdersNumber',
          'charts',
          'colors',
          'tableValues',
          'timeIndexHelper',
          'weekDates',
        ]);
      });

      xit('`charts` should contain proper data', () => {
        expect(partResults.charts).toEqual(transformedFixtures.chartsData);
      });

      xit('`tableValues` should contain proper data', () => {
        expect(partResults.tableValues).toEqual(transformedFixtures.tableData);
      });

      xit('`weekDates` should contain proper data', () => {
        expect(partResults.weekDates).toEqual(
          transformedFixtures.weekDatesData,
        );
      });
    });
  });

  describe('createForecastDataStructure', () => {
    let allResults;
    beforeEach(() => {
      allResults = utils.createForecastDataStructure(fixtures, {
        startTime: '00:00:00',
        endTime: '23:59:59',
      });
    });

    xit('should return proper structure', () => {
      expect(Object.keys(allResults).sort()).toEqual([
        'biggestOrdersNumber',
        'biggestTotalValue',
        'charts',
        'colors',
        'tableValues',
        'weekDates',
      ]);
    });

    xit('`charts` should contain proper data', () => {
      expect(allResults.charts).toEqual(transformedFixtures.charts);
    });

    xit('`days` should contain proper data', () => {
      expect(allResults.tableValues).toEqual(transformedFixtures.tableValues);
    });

    xit('`weekDates` should contain proper data', () => {
      expect(allResults.weekDates).toEqual(transformedFixtures.weekDates);
    });
  });

  describe('formatZoneList', () => {
    let results;
    beforeEach(() => {
      results = [];
      results = utils.formatZoneList([
        { id: 'zone:bergen$center', fields: { name: 'Center' } },
      ]);
    });

    xit('should return formatted structure', () => {
      expect(results).toEqual([{ label: 'Center', value: 'bergen$center' }]);
    });
  });

  describe('updateSelectedDays', () => {
    xit('should return updated array', () => {
      const day = {
        dataObj: {
          week: 'W2-18',
          day: '1',
          value: 99999999,
        },
      };
      const selectedDays = [day];
      const updatedSelectedDays = utils.updateSelectedDays(
        transformedFixtures.tableValues,
        selectedDays,
      );
      expect(updatedSelectedDays).toEqual([
        { dataObj: { ...day.dataObj, value: 51 } },
      ]);
    });
  });

  describe('createTimeOptions', () => {
    xit('should return array of select options', () => {
      const options = { startHour: 22 };
      const expected = [
        { label: '22:00', value: '22:00:00' },
        { label: '22:30', value: '22:30:00' },
        { label: '23:00', value: '23:00:00' },
        { label: '23:30', value: '23:30:00' },
        { label: '23:59', value: '23:59:59' },
      ];
      const timeOptions = utils.createTimeOptions(options);
      expect(timeOptions).toEqual(expected);
    });
  });

  describe('createAdjustmentDataObject', () => {
    xit('should return proper object', () => {
      moment.tz.setDefault('EST');
      const date = moment('2018-01-01T00:00:00');
      const data = {
        filters: {
          startTime: '11:00:00',
          endTime: '15:00:00',
          zoneIds: ['bergen$center'],
        },
        adjustment: {
          selectedDays: [{ date }],
          adjustment: 10,
          fixAdjustment: false,
          reason: 'trend',
          reasonDetail: 'whatever',
          appliesTo: ['base'],
        },
      };
      const dataObj = utils.createAdjustmentDataObject(data);
      expect(dataObj).toEqual({
        adjust_by: 10,
        applies_to: ['base'],
        comment: 'whatever',
        end_time: '15:00:00',
        start_time: '11:00:00',
        forecast_dates: ['2018-01-01'],
        reason: 'trend',
        zone_ids: ['bergen$center'],
        fixed: false,
      });
    });
  });

  describe('updateHistory', () => {
    xit('should return updated history', () => {
      const history = [
        {
          id: 10,
          active: false,
          adjust_by: 0.5,
        },
      ];
      const adjustment = {
        id: 10,
        active: true,
        adjust_by: 0.3,
      };
      const expected = [
        {
          id: 10,
          active: true,
          adjust_by: 0.3,
        },
      ];
      expect(utils.updateHistory(history, adjustment)).toEqual(expected);
    });
  });
});
