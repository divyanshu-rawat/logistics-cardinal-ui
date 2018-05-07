import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { noop } from 'lodash';

import ForecastAdjustmentForm from '../ForecastAdjustmentForm';
import { initialState } from '../reducer';

describe('<ForecastAdjustmentForm />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(
      <ForecastAdjustmentForm
        filters={initialState.filters}
        selectedDays={[]}
        updateAdjustment={noop}
        onSave={noop}
        adjustment={initialState.adjustment}
        onCancel={noop}
      />,
    );
  });

  it('should render the component', () => {
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });
});
