import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Default } from '../Default';

import Themes from '../../../themes';

const props = {
  theme: Themes.rooster,
  someOtherProp: true,
};

describe('<Default />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(<Default {...props}>Test...</Default>));
    expect(tree).toMatchSnapshot();
  });
});
