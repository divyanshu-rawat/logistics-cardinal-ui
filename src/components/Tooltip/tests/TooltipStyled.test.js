import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TooltipStyled from '../TooltipStyled';
import theme from '../../../themes/rooster';

const renderedComponent = ({
  position = 'top',
  content = 'The world Champion!',
}) =>
  shallow(
    <TooltipStyled theme={theme} position={position} content={content}>
      Corinthians!
    </TooltipStyled>,
  );

describe('<TooltipStyled />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent({}));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with position right', () => {
    const tree = toJson(
      renderedComponent({
        position: 'right',
      }),
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with position bottom', () => {
    const tree = toJson(
      renderedComponent({
        position: 'bottom',
      }),
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with position left', () => {
    const tree = toJson(
      renderedComponent({
        position: 'left',
      }),
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with an unknown position', () => {
    const tree = toJson(
      renderedComponent({
        position: 'null',
      }),
    );
    expect(tree).toMatchSnapshot();
  });
});
