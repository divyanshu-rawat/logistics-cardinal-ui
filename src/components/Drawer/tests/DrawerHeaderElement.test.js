import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DrawerHeaderElement } from '../DrawerHeader';

const renderedComponent = () => shallow(<DrawerHeaderElement />);

describe('<DrawerHeaderElement />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
