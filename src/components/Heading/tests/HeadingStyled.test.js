import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import HeadingStyled from '../HeadingStyled';
import { RoosterTheme } from '../../../themes/rooster';

const renderedComponent = ({ as = 'h3', bold = false, noMargin = false }) =>
  shallow(
    <HeadingStyled theme={RoosterTheme} as={as} bold={bold} noMargin={noMargin}>
      Almighty Corinthians!
    </HeadingStyled>,
  );

describe('<HeadingStyled />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent({}));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with different props', () => {
    const tree = toJson(
      renderedComponent({
        as: 'h4',
        bold: true,
        noMargin: true,
      }),
    );
    expect(tree).toMatchSnapshot();
  });

  it('should still rendering the component even if the element doesnt match the list', () => {
    const tree = toJson(
      renderedComponent({
        as: 'span',
        bold: true,
        noMargin: true,
      }),
    );
    expect(tree).toMatchSnapshot();
  });
});
