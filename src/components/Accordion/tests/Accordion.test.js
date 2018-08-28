import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Accordion from '..';
import AccordionItem from '../AccordionItem';

const renderedComponent = ({ multiple = true }) =>
  shallow(
    <Accordion multiple={multiple}>
      <AccordionItem title="Some Title">
        <p>Some Content...</p>
      </AccordionItem>
    </Accordion>,
  );

describe('Accordion', () => {
  it('should render the component', () => {
    const renderComponent = renderedComponent({});
    expect(toJson(renderComponent)).toMatchSnapshot();
  });

  it('onRegisterComponent should register the component with given id', () => {
    const renderComponent = renderedComponent({});
    const KEY = '1bcAdb'; // short-id;
    expect(renderComponent.state(KEY)).toBe(undefined);
    renderComponent.instance().onRegisterComponent(KEY, true);
    expect(renderComponent.state(KEY)).toBe(true);
  });

  it('onToggleItem should toggle component', () => {
    const renderComponent = renderedComponent({});
    const KEY = '1bcAdb'; // short-id;
    const KEY2 = '1bcAdbCD'; // short-id;
    const instance = renderComponent.instance();

    instance.onRegisterComponent(KEY, false);
    instance.onRegisterComponent(KEY2, false);

    instance.onToggleItem(KEY)();

    expect(renderComponent.state(KEY)).toBe(true);

    renderComponent.setProps({ multiple: false });

    instance.onToggleItem(KEY2)();
    expect(renderComponent.state(KEY)).toBe(false);
    expect(renderComponent.state(KEY2)).toBe(true);
  });
});
