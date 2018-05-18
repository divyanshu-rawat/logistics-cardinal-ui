import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Checkbox from '..';

const onChangeFn = jest.fn();

const renderedComponent = (value) =>
  shallow(
    <Checkbox
      label="My Checkbox"
      onChange={onChangeFn}
      initialValue={value}
      id="myId"
      name="myName"
    />,
  );

describe('<Checkbox />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `initial value`', () => {
    const tree = toJson(renderedComponent(true));
    expect(tree).toMatchSnapshot();
  });

  it('should call `onChangeFn` when value is changed', () => {
    renderedComponent()
      .find('input')
      .simulate('change', { persist: jest.fn(), target: { checked: true } });

    expect(onChangeFn.mock.calls.length).toBe(1);
  });
});
