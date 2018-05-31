import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PercentageStyled from '../PercentageStyled';
import Theme from '../../../../../themes/rooster';

const renderedComponent = () => shallow(<PercentageStyled theme={Theme} />);

describe('<PercentageStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});