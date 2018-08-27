import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RadioButtonGroup from '..';
import RadioButton from '../RadioButton';

const onChangeFn = jest.fn();

const component = (
  <RadioButtonGroup name="foo" selectedValue="single" onChange={onChangeFn}>
    <RadioButton id="single" value="single" label="Single" />
    <RadioButton id="married" value="married" label="Married" />
  </RadioButtonGroup>
);

describe('RadioButtonGroup', () => {
  it('should render the component', () => {
    const renderComponent = shallow(component);
    expect(toJson(renderComponent)).toMatchSnapshot();
  });

  it('should call `onChangeFn` when handleChange has been triggered', () => {
    const renderComponent = shallow(component);

    renderComponent
      .instance()
      .handleChange({ event: { target: { value: 'test' } } });

    expect(onChangeFn.mock.calls.length).toBe(1);
  });
});
