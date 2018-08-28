import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AccordionItemHeader from '../AccordionItemHeader';

const onClickFn = jest.fn();

const renderedComponent = (open = false) =>
  shallow(
    <AccordionItemHeader open={open} action={onClickFn}>
      <p>Some children</p>
    </AccordionItemHeader>,
  );

describe('AccordionItemHeader', () => {
  it('should render the component', () => {
    const renderComponent = renderedComponent();
    expect(toJson(renderComponent)).toMatchSnapshot();
  });

  it('should render the component opened', () => {
    const renderComponent = renderedComponent(true);
    expect(toJson(renderComponent)).toMatchSnapshot();
  });

  it('should call `onClickFn` when AccordionItemHeader is clicked', () => {
    const renderComponent = renderedComponent(true);
    renderComponent.simulate('click');
    expect(onClickFn.mock.calls.length).toBe(1);
  });
});
