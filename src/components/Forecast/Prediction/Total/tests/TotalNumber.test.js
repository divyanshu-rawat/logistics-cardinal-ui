import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TotalNumber from '../TotalNumber';

const renderedComponent = () => shallow(<TotalNumber total={100} />);

describe('<TotalNumber />', () => {
  it('should render the component with the correct number', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
