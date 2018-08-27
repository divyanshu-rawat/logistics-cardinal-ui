import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VerticalTabContainerStyled from '../VerticalTabContainerStyled';

const renderComponent = () => (
  <VerticalTabContainerStyled theme={{ composedSpacings: {}, colors: {} }} />
);

describe('<VerticalTabContainerStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(renderComponent()));
    expect(tree).toMatchSnapshot();
  });
});
