import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IDCardStyled from '../IDCardStyled';

const renderedComponent = () =>
  shallow(<IDCardStyled theme={{ fontSize: {}, fontWeight: {} }} />);

describe('IDCardStyled', () => {
  it('should render the component with default size', () => {
    const renderComponent = renderedComponent();
    expect(toJson(renderComponent)).toMatchSnapshot();
  });
});
