import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AccordionItemWrapper from '../AccordionItemWrapper';

const registerComponentFn = jest.fn();
const toggleItemFn = () => jest.fn();

const renderedComponent = ({ id = 'foo', items = {}, expandOnInit = false }) =>
  shallow(
    <AccordionItemWrapper
      id={id}
      registerComponent={registerComponentFn}
      items={items}
      content={<p>Some content...</p>}
      title={<h1>Some Title...</h1>}
      animationDuration={400}
      toggleItem={toggleItemFn}
      expandOnInit={expandOnInit}
    />,
  );

afterEach(() => {
  registerComponentFn.mockReset();
});

describe('AccordionItemWrapper', () => {
  it('should render the component', () => {
    const renderComponent = renderedComponent({});
    expect(toJson(renderComponent)).toMatchSnapshot();
  });

  it('should call `registerComponentFn` once the component did mount', () => {
    renderedComponent({});
    expect(registerComponentFn.mock.calls.length).toBe(1);
  });
});
