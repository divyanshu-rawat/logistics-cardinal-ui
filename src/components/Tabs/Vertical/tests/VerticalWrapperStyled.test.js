import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VerticalWrapperStyled from '../VerticalWrapperStyled';

const renderComponent = () => <VerticalWrapperStyled />;

describe('<VerticalWrapperStyled />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(renderComponent()));
    expect(tree).toMatchSnapshot();
  });
});
