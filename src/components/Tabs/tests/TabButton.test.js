import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TabButton from '../TabButton';
import theme from '../../../themes/rooster';

const renderedComponent = ({ theme, isActive = false }) =>
  shallow(<TabButton theme={theme} isActive={isActive} />);

describe('<TabButton />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent({ theme }));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with isActive set as true', () => {
    const tree = toJson(renderedComponent({ theme, isActive: true }));
    expect(tree).toMatchSnapshot();
  });
});
