import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AvatarStyled from '../AvatarStyled';

const renderedComponent = (size = 'md') =>
  shallow(<AvatarStyled size={size} />);

describe('AvatarStyled', () => {
  it('should render the component with default size', () => {
    const renderComponent = renderedComponent();
    expect(toJson(renderComponent)).toMatchSnapshot();
  });

  it('should render the component with small size', () => {
    const renderComponent = renderedComponent('sm');
    expect(toJson(renderComponent)).toMatchSnapshot();
  });

  it('should render the component with large size', () => {
    const renderComponent = renderedComponent('lg');
    expect(toJson(renderComponent)).toMatchSnapshot();
  });
});
