import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DrawerContentStyled from '../DrawerContentStyled';

const renderedComponent = () => shallow(<DrawerContentStyled />);

describe('<DrawerContentStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
