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

  it('should render correct sizes', () => {
    const wrapper = renderedComponent();
    const instance = wrapper.instance();
    expect(instance.getStrokeWidth('lg')).toBe(4);
    expect(instance.getStrokeWidth('md')).toBe(3);
    expect(instance.getStrokeWidth('sm')).toBe(2);
    expect(instance.getStrokeWidth('xs')).toBe(1);
  });
});
