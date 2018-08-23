import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RadioButtonGroup from '..';
import RadioButton from '../RadioButton';

const component = (
  <RadioButtonGroup name="foo" selectedValue="single" onChange={jest.fn()}>
    <RadioButton id="single" value="single" label="Single" />
    <RadioButton id="married" value="married" label="Married" />
  </RadioButtonGroup>
);

describe('RadioButtonGroup', () => {
  it('should render the component', () => {
    const renderComponent = shallow(component);
    expect(toJson(renderComponent)).toMatchSnapshot();
  });
});
