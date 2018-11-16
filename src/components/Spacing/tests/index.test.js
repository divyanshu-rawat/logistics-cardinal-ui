import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Spacing from '..';
import Button from '../../Button';

// import { rooster as RoosterTheme } from '../../../themes';

const renderedComponent = ({ type, top, bottom, right, left, inline }) =>
  shallow(
    <Spacing
      type={type}
      top={top}
      bottom={bottom}
      right={right}
      left={left}
      inline={inline}
    >
      <Button>Awesome Button</Button>
    </Spacing>,
  );

describe('<Spacing />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent({}));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with padding instead of margin', () => {
    const tree = toJson(renderedComponent({ type: 'padding' }));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with all properties as true', () => {
    const tree = toJson(
      renderedComponent({
        top: true,
        bottom: true,
        right: true,
        left: true,
        inline: true,
      }),
    );
    expect(tree).toMatchSnapshot();
  });
});
