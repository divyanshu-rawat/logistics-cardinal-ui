import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { noop } from 'lodash';

import { ForecastAdjustmentsHistoryFilters } from '../ForecastAdjustmentsHistoryFilters';

describe('<ForecastAdjustmentsHistoryFilters />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(
      <ForecastAdjustmentsHistoryFilters
        onFilterChange={noop}
        zoneOptions={[]}
        startTime=""
        endTime=""
        zoneIds={[]}
      />,
    );
  });

  it('should render the component', () => {
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });
});
