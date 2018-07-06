import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { LargeDesktop } from '../LargeDesktop';

import Themes from '../../../themes';

const props = {
  theme: Themes.rooster,
  someOtherProp: true,
};

describe('<LargeDesktop />', () => {
  it('should render the component', () => {
    const tree = toJson(
      shallow(<LargeDesktop {...props}>Test...</LargeDesktop>),
    );
    expect(tree).toMatchSnapshot();
  });
});
