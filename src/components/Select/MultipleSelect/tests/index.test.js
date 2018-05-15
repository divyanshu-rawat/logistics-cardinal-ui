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
      onChange={onChangeFn}
      initialValue={value}
    />,
  );

describe('<MultipleSelect />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should init component with given `initialValue` prop', () => {
    const tree = toJson(renderedComponent([MultipleSelectMock[0]]));
    expect(tree).toMatchSnapshot();
  });

  it('should call `onChangeFn` when value is changed', () => {
    renderedComponent()
      .find('Select')
      .simulate('change', { target: { value: [MultipleSelectMock[1]] } });

    expect(onChangeFn.mock.calls.length).toBe(1);
  });
});
