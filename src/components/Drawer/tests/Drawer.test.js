import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Drawer from '..';

const renderedComponent = ({
  open = false,
  content = <p>Test!</p>,
  right = false,
  width = 500,
  header = <header>Header Test</header>,
  withRenderProps = false,
}) =>
  shallow(
    <Drawer
      open={open}
      content={content}
      right={right}
      width={width}
      header={header}
    >
      {withRenderProps // eslint-disable-next-line
        ? ({ isOpen }, toggleState) => (
          <button onClick={toggleState}>{isOpen}</button>
          )
        : null}
    </Drawer>,
  );

describe('<Drawer />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent({}));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component width different props', () => {
    const tree = toJson(
      renderedComponent({ open: true, right: true, width: 100 }),
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with render props', () => {
    const tree = toJson(
      renderedComponent({
        open: true,
        right: true,
        width: 100,
        withRenderProps: true,
      }),
    );
    expect(tree).toMatchSnapshot();
  });

  it('should toggle state when overlay is clicked', () => {
    const component = renderedComponent({});
    component.setState({ isOpen: true });
    component.find('OverlayStyled').simulate('click');
    expect(component.state('isOpen')).toBe(false);
  });

  it('should keep the drawer opened if user is interacting with it', () => {
    const component = renderedComponent({});
    component.setState({ isOpen: true });
    component.find('DrawerStyled').simulate('click');
    expect(component.state('isOpen')).toBe(true);
  });

  it('should close the drawer when the ESC has been pressed', () => {
    const component = renderedComponent({});
    component.setState({ isOpen: true });
    const event = new KeyboardEvent('keyup', {
      key: 'Esc',
      which: 27,
      keyCode: 27,
    });
    document.body.dispatchEvent(event);
    expect(component.state('isOpen')).toBe(false);
    // if ESC key is pressed again it shouldn't call toggleState()
    document.body.dispatchEvent(event);
    expect(component.state('isOpen')).toBe(false);
  });

  it('should trigger toggleState when component has been updated', () => {
    const component = renderedComponent({});
    component.setProps({ open: true });
    expect(component.state('isOpen')).toBe(true);
  });

  it('should trigger toggleState when component has been updated', () => {
    const component = renderedComponent({});
    component.setState({ isOpen: true });
    const unbindEscKeyFn = jest.fn();
    component.instance().unbindEscKey = unbindEscKeyFn;
    component.unmount();
    expect(unbindEscKeyFn.mock.calls.length).toBe(1);
  });
});
