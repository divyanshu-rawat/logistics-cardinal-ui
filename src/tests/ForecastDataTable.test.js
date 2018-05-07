import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { noop } from 'lodash';

import ForecastDataTable, { cellFormatter } from '../ForecastDataTable';
import { tableValues, charts } from './dataBasedOnFixtures';

describe('<ForecastDataTable />', () => {
  let renderedComponent;

  beforeEach(() => {
    const sortedDays = Object.keys(charts).sort();
    const selectRowProp = {
      mode: 'checkbox',
      selected: ['52', '1', '2'],
      onSelect: noop,
      onSelectAll: noop,
    };
    renderedComponent = shallow(
      <ForecastDataTable
        tableValues={tableValues}
        selectRowProp={selectRowProp}
        sortedDays={sortedDays}
        biggestOrdersNumber={67}
        biggestTotalValue={295}
        colors={{}}
        onClickHandler={noop}
        selectedDays={[]}
      />,
    );
  });

  it('should render the component', () => {
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });

  describe('cellFormatter', () => {
    let renderedCellComponent;
    beforeEach(() => {
      renderedCellComponent = shallow(
        cellFormatter(
          {
            biggestOrdersNumber: 67,
            week: 'W2-18',
            cell: { value: 51, change: -16 },
            day: 1,
          },
          noop,
          [{ dataObj: { day: 1, week: 'W2-18' } }],
        ),
      );
    });

    it('should render the cell component', () => {
      const tree = toJson(renderedCellComponent);
      expect(tree).toMatchSnapshot();
    });
  });
});
