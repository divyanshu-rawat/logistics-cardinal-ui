import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TabContainer from '../TabContainer';
import theme from '../../../themes/rooster';

const renderedComponent = ({ theme }) =>
  shallow(<TabContainer theme={theme} />);

describe('<TabContainer />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent({ theme }));
    expect(tree).toMatchSnapshot();
  });
});
