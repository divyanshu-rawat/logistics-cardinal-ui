import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import SpacingBlockStyled from '../SpacingBlockStyled';

const renderedComponent = ({ inline }) =>
  mount(<SpacingBlockStyled inline={inline} />);

describe('<SpacingBlockStyled />', () => {
  it('should render component with the default props', () => {
    const tree = toJson(renderedComponent({ inline: false }));
    expect(tree).toMatchSnapshot();
  });

  it('should render component with `inline = true`', () => {
    const tree = toJson(renderedComponent({ inline: true }));
    expect(tree).toMatchSnapshot();
  });
});
