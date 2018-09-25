import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Mobile } from '../Mobile';

import { rooster } from '../../../themes';

const props = {
  theme: rooster,
  someOtherProp: true,
};

describe('<Mobile />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(<Mobile {...props}>Test...</Mobile>));
    expect(tree).toMatchSnapshot();
  });
});
