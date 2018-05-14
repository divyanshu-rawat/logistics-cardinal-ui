import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ZoneOptionsMock } from '../../../stories/utils';
import ZoneSelector from '..';

const onChangeFn = jest.fn();

const renderedComponent = (value) =>
  shallow(
    <ZoneSelector
      options={ZoneOptionsMock}
      name="zones"
      onChangeZone={onChangeFn}
      initialValue={value}
    />
  );

describe('<ZoneSelector />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should init component with given `initialValue` prop', () => {
    const tree = toJson(renderedComponent([ZoneOptionsMock[0]]));
    expect(tree).toMatchSnapshot();
  });

  it('should call `onChangeFn` when value is changed', () => {
    renderedComponent()
      .find('Select')
      .simulate('change', { target: { value: [ZoneOptionsMock[1]] } });

    expect(onChangeFn.mock.calls.length).toBe(1);
  });
});
