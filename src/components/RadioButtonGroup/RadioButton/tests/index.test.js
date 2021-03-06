import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RadioButtonConsumer from '..';

const renderedComponent = () =>
  shallow(<RadioButtonConsumer label="foo" id="foo" value="foo" />, {
    context: {
      onChange: jest.fn(),
      selectedValue: null,
      inline: false,
      name: 'test',
    },
  });

describe('RadioButtonConsumer', () => {
  it('should render the component', () => {
    const renderComponent = renderedComponent({});
    expect(toJson(renderComponent)).toMatchSnapshot();
  });
});
