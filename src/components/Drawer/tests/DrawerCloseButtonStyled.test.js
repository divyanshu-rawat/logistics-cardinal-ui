import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DrawerCloseButtonStyled } from '../DrawerCloseButton';

const renderedComponent = () => shallow(<DrawerCloseButtonStyled />);

describe('<DrawerCloseButtonStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
