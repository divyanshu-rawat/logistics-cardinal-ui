import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Tooltip from '..';

const renderComponent = ({ content = 'Tooltip Text', position = 'top' }) =>
  shallow(
    <Tooltip content={content} position={position}>
      <span>Hover me</span>
    </Tooltip>,
  );

describe('<Tooltip />', () => {
  it('should render component with normal props', () => {
    const renderedComponent = renderComponent({});
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should render component with position right', () => {
    const renderedComponent = renderComponent({ position: 'right' });
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should render component with position bottom', () => {
    const renderedComponent = renderComponent({ position: 'bottom' });
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should render component with position left', () => {
    const renderedComponent = renderComponent({ position: 'left' });
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
