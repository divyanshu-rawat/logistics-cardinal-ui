import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Theme from '../../../themes/rooster';

import Select from '..';

const renderedComponent = (size = '') =>
  shallow(<Select theme={Theme} size={size} />);

describe('<Select />', () => {
  it('should render the component with `default size`', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `small size`', () => {
    const tree = toJson(renderedComponent('small'));
    expect(tree).toMatchSnapshot();
  });
});
