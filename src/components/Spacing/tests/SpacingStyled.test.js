import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import SpacingStyled from '../SpacingStyled';

import { rooster as RoosterTheme } from '../../../themes';

const renderedComponent = ({ type, top, bottom, right, left }) =>
  mount(
    <SpacingStyled
      type={type}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      theme={RoosterTheme}
    />,
  );

describe('<SpacingStyled />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent({ type: 'margin' }));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with padding instead of margin', () => {
    const tree = toJson(
      renderedComponent({
        type: 'padding',
        top: true,
        bottom: true,
        right: true,
        left: true,
      }),
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with all properties as true', () => {
    const tree = toJson(
      renderedComponent({
        type: 'margin',
        top: true,
        bottom: true,
        right: true,
        left: true,
      }),
    );
    expect(tree).toMatchSnapshot();
  });
});
