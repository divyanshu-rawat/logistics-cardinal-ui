import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { MultipleSelectMock } from '../../../../utils/mocks';
import MultipleSelect from '..';

const onChangeFn = jest.fn();

const renderedComponent = (value) =>
  shallow(
    <MultipleSelect
      options={MultipleSelectMock}
      name="zones"
      placeholder="Select Zone..."
      onChange={onChangeFn}
      {...(value ? { initialValue: value } : {})}
    />,
  );

describe('<MultipleSelect />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
    expect(onChangeFn.mock.calls.length).toBe(0);
  });

  it('should init component with given `initialValue` prop', () => {
    onChangeFn.mockClear();
    const component = renderedComponent([MultipleSelectMock[0]]);
    const tree = toJson(component);

    expect(onChangeFn.mock.calls.length).toBe(1);
    expect(tree).toMatchSnapshot();

    onChangeFn.mockClear();
    component.setProps({
      initialValue: [MultipleSelectMock[1]],
    });

    expect(onChangeFn.mock.calls.length).toBe(1);
  });

  it('should not call onChange if initialValue is still equal', () => {
    const component = renderedComponent([MultipleSelectMock[0]]);
    onChangeFn.mockClear();

    component.setProps({
      initialValue: [MultipleSelectMock[0]],
    });

    expect(onChangeFn.mock.calls.length).toBe(0);
  });

  it('MultipleSelect: should call `onChangeFn` when value is changed', () => {
    onChangeFn.mockClear();
    renderedComponent()
      .find('Select')
      .simulate('change', { target: { value: [MultipleSelectMock[1]] } });

    expect(onChangeFn.mock.calls.length).toBe(1);
  });
});
