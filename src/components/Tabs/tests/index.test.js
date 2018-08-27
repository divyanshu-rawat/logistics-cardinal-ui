import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Text from '../../Text';
import ComposedTabs from '..';

const renderedComponent = ({ mode = 'horizontal' }) =>
  shallow(
    <ComposedTabs
      mode={mode}
      options={{
        forecast: (
          <Text as="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        ),
        history: (
          <Text as="p">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </Text>
        ),
      }}
    />,
  );

describe('<ComposedTabs />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent({}));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component in vertical mode', () => {
    const tree = toJson(renderedComponent({ mode: 'vertical' }));
    expect(tree).toMatchSnapshot();
  });

  it('`onClick` should update `state.active`', () => {
    const component = renderedComponent({});
    component.instance().onClick(1)();

    expect(component.state('active')).toBe(1);
  });
});
