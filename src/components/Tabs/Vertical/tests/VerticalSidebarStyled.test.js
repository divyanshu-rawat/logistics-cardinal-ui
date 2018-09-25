import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VerticalSidebarStyled from '../VerticalSidebarStyled';
import { RoosterTheme } from '../../../../themes/rooster';

const renderComponent = () => <VerticalSidebarStyled theme={RoosterTheme} />;

describe('<VerticalSidebarStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(renderComponent()));
    expect(tree).toMatchSnapshot();
  });
});
