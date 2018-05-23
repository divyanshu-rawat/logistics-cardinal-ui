import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import OuterGutter from '../OuterGutter';
import theme from '../../../themes/rooster';

const renderedComponent = () => shallow(<OuterGutter theme={theme} />);

describe('<OuterGutter />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
