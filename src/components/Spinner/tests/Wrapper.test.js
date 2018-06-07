import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(<Wrapper />));
    expect(tree).toMatchSnapshot();
  });
});
