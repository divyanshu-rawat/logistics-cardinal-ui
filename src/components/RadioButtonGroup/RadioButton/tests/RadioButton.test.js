import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RadioButton from '../RadioButton';

const onChangeFn = jest.fn();

const renderedComponent = () =>
  shallow(
    <RadioButton
      label="foo"
      id="foo"
      value="foo"
      name="foo"
      onChange={onChangeFn}
      selectedValue="foo"
      inline
    />,
  );

describe('RadioButton', () => {
  it('should render the component', () => {
    const renderComponent = renderedComponent();
    expect(toJson(renderComponent)).toMatchSnapshot();
  });

  it('should call the onChangeFn when value is changed', () => {
    const renderComponent = renderedComponent();
    renderComponent.find('Input').simulate('change');
    expect(onChangeFn.mock.calls.length).toBe(1);
  });
});
