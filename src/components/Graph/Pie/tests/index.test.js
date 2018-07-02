import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Pie from '..';
import { SIZES } from '../../../utils/constants';

const renderedComponent = () =>
  shallow(
    <Pie
      data={[]}
      dataKey="value"
      innerRadiusSize={SIZES.xs}
      outerRadiusSize={SIZES.lg}
    >
      Awesome Pie Chart
    </Pie>,
  );

describe('<Pie />', () => {
  it('should render the component', () => {
    const wrapper = renderedComponent();
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
