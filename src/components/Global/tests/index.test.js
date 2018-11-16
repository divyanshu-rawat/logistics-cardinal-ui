import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Global from '..';
import { rooster as RoosterTheme } from '../../../themes';

const renderedComponent = () => shallow(<Global theme={RoosterTheme} />);

describe('<Global />', () => {
  it('should render styled component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
