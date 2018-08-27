import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import OverlayStyled from '../OverlayStyled';
import Theme from '../../../themes/rooster';

const renderedComponent = (open = false) =>
  shallow(<OverlayStyled open={open} theme={Theme} />);

describe('<OverlayStyled />', () => {
  it('should render the component as closed', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with the property open set as true', () => {
    const tree = toJson(renderedComponent(true));
    expect(tree).toMatchSnapshot();
  });
});