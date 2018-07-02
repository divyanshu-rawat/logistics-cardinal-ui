import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PieChart from '..';

const renderedComponent = () => shallow(<PieChart>Awesome chart</PieChart>);

describe('<PieChart />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
