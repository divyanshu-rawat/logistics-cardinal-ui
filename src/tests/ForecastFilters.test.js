import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { noop } from 'lodash';

import { ForecastFilters } from '../ForecastFilters';
import { initialState } from '../reducer';

describe('<ForecastFilters />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(
      <ForecastFilters
        onFilterChange={noop}
        zoneOptions={[{ value: 'bergen$center', label: 'bergen$center' }]}
        initialValues={initialState.filters}
        onChartsToggle={noop}
        chartsOpened
      />,
    );
  });

  it('should render the component', () => {
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });
});
