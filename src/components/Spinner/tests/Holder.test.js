import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Holder from '../Holder';
import Theme from '../../../themes/rooster';

describe('<Holder />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(<Holder theme={Theme} />));
    expect(tree).toMatchSnapshot();
  });
});
