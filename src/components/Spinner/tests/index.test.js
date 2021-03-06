import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Spinner } from '..';
import { rooster as RoosterTheme } from '../../../themes';

function renderComponent(size, spinWhen = false) {
  return shallow(
    <Spinner theme={RoosterTheme} size={size} spinWhen={spinWhen}>
      <span>some children</span>
    </Spinner>,
  ).dive();
}

describe('<Spinner />', () => {
  it('should render the component', () => {
    const tree = toJson(renderComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with different props', () => {
    const tree = toJson(renderComponent(100, true));
    expect(tree).toMatchSnapshot();
  });
});
