import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Holder from '../Holder';
import { rooster as RoosterTheme } from '../../../themes';

describe('<Holder />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(<Holder theme={RoosterTheme} />));
    expect(tree).toMatchSnapshot();
  });
});
