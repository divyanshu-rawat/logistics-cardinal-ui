import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DrawerStyled from '../DrawerStyled';
import { rooster as RoosterTheme } from '../../../themes';

const renderedComponent = () => shallow(<DrawerStyled theme={RoosterTheme} />);

describe('<DrawerStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
