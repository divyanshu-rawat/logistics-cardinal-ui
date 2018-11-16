import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { rooster as RoosterTheme } from '../../../themes';

import Select from '..';

const renderedComponent = ({ size = '', validationState = null }) =>
  shallow(
    <Select
      theme={RoosterTheme}
      size={size}
      validationState={validationState}
    />,
  );

describe('<Select />', () => {
  it('should render the component with `default size`', () => {
    const tree = toJson(renderedComponent({}));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `small size`', () => {
    const tree = toJson(renderedComponent({ size: 'small' }));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `error validation state`', () => {
    const tree = toJson(renderedComponent({ validationState: 'error' }));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `warning validation state`', () => {
    const tree = toJson(renderedComponent({ validationState: 'warning' }));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with `success validation state`', () => {
    const tree = toJson(renderedComponent({ validationState: 'success' }));
    expect(tree).toMatchSnapshot();
  });
});
