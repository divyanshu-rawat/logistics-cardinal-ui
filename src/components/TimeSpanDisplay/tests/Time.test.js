import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Time from '../Time';

const renderedComponent = (withSeconds = false) =>
  shallow(<Time date="2017-12-01T10:00:00Z" withSeconds={withSeconds} />);

describe('<Time />', () => {
  it('should render the component without seconds', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with seconds', () => {
    const tree = toJson(renderedComponent(true));
    expect(tree).toMatchSnapshot();
  });
});
