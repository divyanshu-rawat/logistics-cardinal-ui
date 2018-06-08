import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ComposedChart, { getMarginPixels } from '..';
import { SIZES } from '../../../utils/constants';

const renderedComponent = () =>
  shallow(
    <ComposedChart marginSize="lg" data={[]}>
      Awesome chart
    </ComposedChart>,
  );

function generateMargins(size) {
  return { top: size, right: size, left: size, bottom: size };
}

describe('<ComposedChart />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should get correct margin pixels', () => {
    expect(getMarginPixels(SIZES.lg)).toEqual(generateMargins(30));
    expect(getMarginPixels(SIZES.md)).toEqual(generateMargins(20));
    expect(getMarginPixels(SIZES.sm)).toEqual(generateMargins(10));
    expect(getMarginPixels(SIZES.xs)).toEqual(generateMargins(0));
  });
});
