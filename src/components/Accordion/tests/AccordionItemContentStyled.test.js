import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { AccordionItemContentStyled } from '../AccordionItemContent';

const renderedComponent = () => shallow(<AccordionItemContentStyled />);

describe('AccordionItemContentStyled', () => {
  it('should render the component', () => {
    const renderComponent = renderedComponent();
    expect(toJson(renderComponent)).toMatchSnapshot();
  });
});
