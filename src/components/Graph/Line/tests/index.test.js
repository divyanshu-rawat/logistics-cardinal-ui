import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Line from '..';

const renderedComponent = () =>
  shallow(<Line dataKey="shifts" color="chocolate" size="xs" dash />);

describe('<Line />', () => {
  it('should render the component', () => {
    const wrapper = renderedComponent();
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
