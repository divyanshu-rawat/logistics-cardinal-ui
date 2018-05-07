import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import moment from 'moment-timezone';

import ForecastAdjustmentPreviewTable, {
  cellFormatter,
} from '../ForecastAdjustmentPreviewTable';

describe('<ForecastAdjustmentPreviewTable />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(
      <ForecastAdjustmentPreviewTable
        filters={{ startTime: '10:00:00', endTime: '23:00:00' }}
        selectedDays={[]}
        adjustment={0}
      />,
    );
  });

  it('should render the component', () => {
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });

  describe('function cellFormatter', () => {
    it("case 'date' returns formatted date", () => {
      const dataObj = {
        date: moment('2018-01-10T12:00:00'),
      };
      const field = 'date';
      expect(cellFormatter(dataObj, field)).toEqual('Wed, Jan 10th');
    });

    it("case 'time' return time", () => {
      const dataObj = {
        startTime: '09:00:00',
        endTime: '22:00:00',
      };
      const field = 'time';
      expect(cellFormatter(dataObj, field)).toEqual('09:00 - 22:00');
    });

    it("case 'originalFC' returns a value", () => {
      const dataObj = {
        dataObj: {
          value: 30,
        },
      };
      const field = 'originalFC';
      expect(cellFormatter(dataObj, field)).toEqual(30);
    });

    it("case 'adjustedFC' returns calculated value", () => {
      const dataObj = {
        dataObj: {
          value: 30,
        },
        adjustment: 10,
      };
      const field = 'adjustedFC';
      expect(cellFormatter(dataObj, field)).toEqual(33);
    });

    it('default returns empty string', () => {
      const dataObj = {
        dataObj: {
          value: 30,
        },
        adjustment: 10,
      };
      const field = 'abc';
      expect(cellFormatter(dataObj, field)).toEqual('');
    });
  });
});
