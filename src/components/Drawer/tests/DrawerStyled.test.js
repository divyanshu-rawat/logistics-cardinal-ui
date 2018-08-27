import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DrawerStyled from '../DrawerStyled';
import Theme from '../../../themes/rooster';

const renderedComponent = () => shallow(<DrawerStyled theme={Theme} />);

describe('<DrawerStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
