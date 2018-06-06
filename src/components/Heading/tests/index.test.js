import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Heading from '..';

const renderedComponent = ({ as = 'h3', bold = false, noMargin = false }) =>
  shallow(
    <Heading as={as} bold={bold} noMargin={noMargin}>
      Almighty Corinthians!
    </Heading>,
  );

describe('<Heading />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent({}));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with different props', () => {
    const tree = toJson(
      renderedComponent({
        as: 'h1',
        noMargin: true,
      }),
    );
    expect(tree).toMatchSnapshot();
  });
});
