import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Area from '..';

const renderedComponent = () =>
  shallow(
    <Area dataKey="shifts" color="chocolate" bgColor="papayawhip" size="xs" />,
  );

describe('<Area />', () => {
  it('should render the component', () => {
    const wrapper = renderedComponent();
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
