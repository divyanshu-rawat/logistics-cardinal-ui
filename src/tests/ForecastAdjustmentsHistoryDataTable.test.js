import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { noop } from 'lodash';

import ForecastAdjustmentsHistoryDataTable from '../ForecastAdjustmentsHistoryDataTable';

describe('<ForecastAdjustmentsHistoryDataTable />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(
      <ForecastAdjustmentsHistoryDataTable data={[]} onStatusToggle={noop} />,
    );
  });

  it('should render the component', () => {
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });
});
