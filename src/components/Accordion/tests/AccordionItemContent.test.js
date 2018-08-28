import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AccordionItemContent from '../AccordionItemContent';

const renderedComponent = () =>
  shallow(
    <AccordionItemContent>
      <p>test...</p>
    </AccordionItemContent>,
  );

describe('AccordionItemContent', () => {
  it('should render the component', () => {
    const renderComponent = renderedComponent();
    expect(toJson(renderComponent)).toMatchSnapshot();
  });
});
