import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Global from '..';
import { RoosterTheme } from '../../../themes/rooster';

const renderedComponent = () => shallow(<Global theme={RoosterTheme} />);

describe('<Global />', () => {
  it('should render styled component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
