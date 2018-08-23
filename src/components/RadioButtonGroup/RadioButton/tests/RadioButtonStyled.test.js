import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RadioButtonStyled from '../RadioButtonStyled';
import Themes from '../../../../themes';

const renderedComponent = ({ inline = false, theme = Themes.rooster }) =>
  shallow(<RadioButtonStyled inline={inline} theme={theme} />);

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
