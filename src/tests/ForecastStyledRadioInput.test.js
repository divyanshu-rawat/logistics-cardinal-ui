import React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'lodash';
import toJson from 'enzyme-to-json';

import { StyledRadioInput } from '../ForecastStyledRadioInput';

describe('<ForecastStyledRadioInput />', () => {
  it('should render the component', () => {
    const renderedComponent = shallow(
      <StyledRadioInput
        label="Label"
        checked
        onChange={noop}
        id="123"
        color="#ffffff"
      />,
    );
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });
});
