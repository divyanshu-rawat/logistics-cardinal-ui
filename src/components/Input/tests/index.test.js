import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Input from '..';
import { rooster as RoosterTheme } from '../../../themes';

const renderedComponent = ({ ref, props }) =>
  mount(<Input inputRef={ref} {...props} theme={RoosterTheme} />);

describe('<Input />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent({ ref: {} }));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with given props...', () => {
    const tree = toJson(
      renderedComponent({
        ref: {},
        props: { placeholder: 'awesome placeholder' },
      }),
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with extra props...', () => {
    const tree = toJson(
      renderedComponent({
        ref: {},
        props: {
          placeholder: 'awesome placeholder',
          x: 1,
          y: 2,
        },
      }),
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with ref as function...', () => {
    const setRef = (element) => element;

    const tree = toJson(
      renderedComponent({
        ref: setRef,
        props: {
          placeholder: 'Input with ref...',
        },
      }),
    );
    expect(tree).toMatchSnapshot();
  });
});
