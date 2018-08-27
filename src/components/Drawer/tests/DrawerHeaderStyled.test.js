import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DrawerHeaderStyled from '../DrawerHeaderStyled';
import Theme from '../../../themes/rooster';

const renderedComponent = () => shallow(<DrawerHeaderStyled theme={Theme} />);

describe('<DrawerHeaderStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
