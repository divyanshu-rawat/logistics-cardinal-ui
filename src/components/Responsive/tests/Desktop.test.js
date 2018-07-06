import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Desktop } from '../Desktop';

import Themes from '../../../themes';

const props = {
  theme: Themes.rooster,
  someOtherProp: true,
};

describe('<Desktop />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(<Desktop {...props}>Test...</Desktop>));
    expect(tree).toMatchSnapshot();
  });
});
