import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Switch from '..';
import Text from '../../Text';
import { rooster } from '../../../themes';

const onChangeFn = jest.fn();

const renderedComponent = ({
  id,
  initialValue = false,
  size = 'sm',
  labelText,
  colors,
  disabled = false,
}) =>
  shallow(
    <Switch
      id={id}
      theme={rooster}
      disabled={disabled}
      initialValue={initialValue}
      size={size}
      labelText={labelText}
      onChangeStatus={onChangeFn}
      colors={colors}
    />,
  );

describe('<Switch />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent({}));
    expect(tree).toMatchSnapshot();
  });

  it('Switch: should render component with given props', () => {
    const props = {
      id: 'someId',
      initialValue: true,
      size: 'md',
      labelText: () => <Text>Some Text</Text>,
      disabled: true,
      colors: {
        on: '#f00',
        off: '#d5d5d5',
      },
    };
    const tree = toJson(renderedComponent(props).dive());
    expect(tree).toMatchSnapshot();
  });

  it('Switch: should call `onChangeFn` when value is changed', () => {
    const component = renderedComponent({}).dive();

    component
      .find('ReactSwitch')
      .simulate('change', { target: { value: true } });

    expect(onChangeFn.mock.calls.length).toBe(1);
  });
});
