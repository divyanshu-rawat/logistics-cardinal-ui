import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TimeOptionsMock } from '../../../../stories/utils';
import Timepicker from '..';

const onChangeFn = jest.fn();

const renderedComponent = (value) =>
  shallow(
    <Timepicker
      options={TimeOptionsMock}
      name="start_at"
      placeholder="Start At"
      onChange={onChangeFn}
      value={value}
    />
  );

describe('<Timepicker />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should init component with given `value` prop', () => {
    const tree = toJson(renderedComponent('09:00:00'));
    expect(tree).toMatchSnapshot();
  });

  it('should call `onChangeFn` when value is changed', () => {
    renderedComponent()
      .find('Select')
      .simulate('change', { target: { value: '10:30:00' } });

    expect(onChangeFn.mock.calls.length).toBe(1);
  });
});
