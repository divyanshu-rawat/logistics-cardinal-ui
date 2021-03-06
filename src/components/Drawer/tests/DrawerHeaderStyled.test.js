import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DrawerHeaderStyled from '../DrawerHeaderStyled';
import { rooster as RoosterTheme } from '../../../themes';

const renderedComponent = () =>
  shallow(<DrawerHeaderStyled theme={RoosterTheme} />);

describe('<DrawerHeaderStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
