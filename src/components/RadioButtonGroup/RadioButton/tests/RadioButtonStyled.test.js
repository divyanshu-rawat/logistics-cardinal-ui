import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RadioButtonStyled from '../RadioButtonStyled';
import { rooster } from '../../../../themes';

const renderedComponent = ({ inline = false }) =>
  shallow(<RadioButtonStyled inline={inline} theme={rooster} />);

describe('RadioButtonStyled', () => {
  it('should render the component', () => {
    const renderComponent = renderedComponent({});
    expect(toJson(renderComponent)).toMatchSnapshot();
  });

  it('should render the component passing inline property as true', () => {
    const renderComponent = renderedComponent({ inline: true });
    expect(toJson(renderComponent)).toMatchSnapshot();
  });
});
