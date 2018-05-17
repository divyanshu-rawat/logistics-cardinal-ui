import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Indicator from '..';

const renderedComponent = () =>
  shallow(
    <Indicator
      label="My super checkbox"
      onChange={jest.fn()}
      id="checkboxId"
      name="checkboxName"
      initialValue
      color="#F00"
    />,
  );

describe('<Indicator />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
