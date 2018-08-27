import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DrawerCloseButton from '../DrawerCloseButton';

const onCloseFn = jest.fn();

const renderedComponent = () =>
  shallow(<DrawerCloseButton onClose={onCloseFn} />);

describe('<DrawerCloseButton />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should call `onCloseFn` when button is clicked', () => {
    const component = renderedComponent();

    component.simulate('click');

    expect(onCloseFn.mock.calls.length).toBe(1);
  });
});
