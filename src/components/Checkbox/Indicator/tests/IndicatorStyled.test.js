import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IndicatorStyled from '../IndicatorStyled';
import { RoosterTheme } from '../../../../themes/rooster';

const renderedComponent = (color) =>
  shallow(<IndicatorStyled color={color} theme={RoosterTheme} />);

describe('<IndicatorStyled />', () => {
  it('should render the component with default color', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with passed color', () => {
    const tree = toJson(renderedComponent('#f00'));
    expect(tree).toMatchSnapshot();
  });
});
