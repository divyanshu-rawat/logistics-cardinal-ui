import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { AccordionItemHeaderStyled } from '../AccordionItemHeader';

const renderedComponent = () => shallow(<AccordionItemHeaderStyled />);

describe('AccordionItemHeaderStyled', () => {
  it('should render the component', () => {
    const renderComponent = renderedComponent();
    expect(toJson(renderComponent)).toMatchSnapshot();
  });
});
