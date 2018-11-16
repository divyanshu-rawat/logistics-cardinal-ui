import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import OuterGutter from '../OuterGutter';
import { rooster as RoosterTheme } from '../../../themes';

const renderedComponent = (withPad) =>
  shallow(<OuterGutter theme={RoosterTheme} withPad={withPad} />);

describe('<OuterGutter />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should render component with `withPad` prop as true', () => {
    const tree = toJson(renderedComponent(true));
    expect(tree).toMatchSnapshot();
  });
});
