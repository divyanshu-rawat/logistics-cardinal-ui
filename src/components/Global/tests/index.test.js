import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Global from '..';
import Theme from '../../../themes/rooster';

const renderedComponent = () => shallow(<Global theme={Theme} />);

describe('<Global />', () => {
  it('should render styled component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
