import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DrawerHeaderButtonStyled } from '../DrawerHeader';

const renderedComponent = () => shallow(<DrawerHeaderButtonStyled />);

describe('<DrawerHeaderButtonStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
