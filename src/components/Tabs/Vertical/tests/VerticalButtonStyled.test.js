import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VerticalButtonStyled from '../VerticalButtonStyled';
import Theme from '../../../../themes/rooster';

const renderComponent = (isActive = false) => (
  <VerticalButtonStyled theme={Theme} isActive={isActive} />
);

describe('<VerticalButtonStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(renderComponent()));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `isActive` prop as true', () => {
    const tree = toJson(shallow(renderComponent(true)));
    expect(tree).toMatchSnapshot();
  });
});
