import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SwitchStyled from '../SwitchStyled';
import { rooster as RoosterTheme } from '../../../themes';

const renderComponent = (active = false) => (
  <SwitchStyled theme={RoosterTheme} active={active} />
);

describe('<SwitchStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(renderComponent()));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `active state`', () => {
    const tree = toJson(shallow(renderComponent(true)));
    expect(tree).toMatchSnapshot();
  });
});
