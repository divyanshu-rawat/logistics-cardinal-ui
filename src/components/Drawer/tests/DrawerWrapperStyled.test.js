import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DrawerWrapperStyled from '../DrawerWrapperStyled';
import Theme from '../../../themes/rooster';

const renderedComponent = (right = false) =>
  shallow(<DrawerWrapperStyled right={right} theme={Theme} />);

describe('<DrawerWrapperStyled />', () => {
  it('should render the component with default position', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with the property right', () => {
    const tree = toJson(renderedComponent(true));
    expect(tree).toMatchSnapshot();
  });
});
