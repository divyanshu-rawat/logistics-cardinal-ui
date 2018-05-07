import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import ForecastChartsTable from '../ForecastChartsTable';
import { charts } from './dataBasedOnFixtures';

describe('<ForecastChartsTable />', () => {
  const sortedDates = Object.keys(charts[1].dates).sort();
  const renderedComponent = mount(
    <ForecastChartsTable
      chartData={{ 1: { sortedDates, data: charts[1].data } }}
      sortedDays={['1']}
    />,
  );

  it('should render the component', () => {
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });
});
