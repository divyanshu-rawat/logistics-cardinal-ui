import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { AccordionItemDividerStyled } from '../AccordionItemWrapper';

const renderedComponent = () => shallow(<AccordionItemDividerStyled />);

describe('AccordionItemDividerStyled', () => {
  it('should render the component', () => {
    const renderComponent = renderedComponent();
    expect(toJson(renderComponent)).toMatchSnapshot();
  });
});
