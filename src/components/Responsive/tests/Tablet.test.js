import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Tablet } from '../Tablet';

import Themes from '../../../themes';

const props = {
  theme: Themes.rooster,
  someOtherProp: true,
};

describe('<Tablet />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(<Tablet {...props}>Test...</Tablet>));
    expect(tree).toMatchSnapshot();
  });
});
