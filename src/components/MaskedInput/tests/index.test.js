import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';

import MaskedInput from '..';

import { rooster as RoosterTheme } from '../../../themes';

import {
  BIRTHDAY_MASK,
  PERCENTAGE_MASK,
  MONEY_MASK,
  EMAIL_MASK,
} from '../constants';

const masks = {
  birthday: {
    id: 'birthday',
    mask: BIRTHDAY_MASK,
    placeholder: 'DD.MM.YYYY',
    guide: true,
  },
  percentage: {
    id: 'percentage',
    mask: PERCENTAGE_MASK,
    placeholder: '%',
    guide: false,
  },
  currency: {
    id: 'currency',
    mask: MONEY_MASK,
    placeholder: '$',
    guide: false,
  },
  email: {
    id: 'email',
    mask: EMAIL_MASK,
    placeholder: 'rick@c137.com',
    guide: true,
  },
};

const onChangeFn = jest.fn();
const onBlurFn = jest.fn();

const renderedComponent = ({ mask, id, placeholder, guide, disabled }) =>
  mount(
    <ThemeProvider theme={RoosterTheme}>
      <MaskedInput
        mask={mask}
        guide={guide}
        placeholder={placeholder}
        id={id}
        disabled={disabled}
        onChange={onChangeFn}
        onBlur={onBlurFn}
      />
    </ThemeProvider>,
  );

describe('<MaskedInput />', () => {
  it('should render the component with `birthday mask`', () => {
    const tree = toJson(renderedComponent(masks.birthday));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `percentage mask`', () => {
    const tree = toJson(renderedComponent(masks.percentage));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `currency mask`', () => {
    const tree = toJson(renderedComponent(masks.currency));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `email mask`', () => {
    const tree = toJson(renderedComponent(masks.currency));
    expect(tree).toMatchSnapshot();
  });

  it('MaskedInput: should call `onChangeFn` when value is changed', () => {
    const component = renderedComponent(masks.currency);
    component
      .find('input')
      .simulate('change', { event: { target: { value: 123 } } });

    expect(onChangeFn.mock.calls.length).toBe(1);
  });

  it('MaskedInput: should call `onBlurFn` when value is changed', () => {
    const component = renderedComponent(masks.currency);

    component.find('input').simulate('blur');

    expect(onBlurFn.mock.calls.length).toBe(1);
  });

  it('MaskedInput: should render input as a disabled field', () => {
    const component = renderedComponent({ ...masks.currency, disabled: true });
    expect(toJson(component)).toMatchSnapshot();
  });

  it('MaskedInput: should render input with hasError prop as true', () => {
    const component = renderedComponent({ ...masks.currency, hasError: true });
    expect(toJson(component)).toMatchSnapshot();
  });
});
