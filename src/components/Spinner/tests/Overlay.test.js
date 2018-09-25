import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Overlay from '../Overlay';
import { RoosterTheme } from '../../../themes/rooster';

describe('<Overlay />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(<Overlay theme={RoosterTheme} />));
    expect(tree).toMatchSnapshot();
  });
});
