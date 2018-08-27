import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DrawerHeader from '../DrawerHeader';

const renderedComponent = () =>
  shallow(<DrawerHeader header={<p>Test</p>} onClose={jest.fn()} />);

describe('<DrawerHeader />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
