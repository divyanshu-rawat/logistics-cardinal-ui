import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Overlay from '../Overlay';
import Theme from '../../../themes/rooster';

describe('<Overlay />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(<Overlay theme={Theme} />));
    expect(tree).toMatchSnapshot();
  });
});
