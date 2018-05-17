import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CellStyled from '../CellStyled';
import Theme from '../../../../../themes/rooster';

const renderedComponent = (type = 'forecast') =>
  shallow(<CellStyled theme={Theme} type={type} />);

describe('<CellStyled />', () => {
  it('should render the styled component as `forecast`', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should render the styled component as `actual`', () => {
    const tree = toJson(renderedComponent('actual'));
    expect(tree).toMatchSnapshot();
  });
});
