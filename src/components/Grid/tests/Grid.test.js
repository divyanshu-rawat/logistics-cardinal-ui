import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Cell } from 'styled-css-grid';

import ComposedGrid from '../Grid';
import theme from '../../../themes/rooster';

const renderedComponent = (withPad) =>
  shallow(
    <ComposedGrid theme={theme} withPad={withPad} columns={12}>
      <Cell width={12}>Corinthians!</Cell>
    </ComposedGrid>,
  );

describe('<Grid />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `withPad` prop as true', () => {
    const tree = toJson(renderedComponent(true));
    expect(tree).toMatchSnapshot();
  });
});
