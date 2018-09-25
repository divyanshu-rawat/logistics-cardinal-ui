import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { PredictionMock } from '../../../../../utils/mocks';
import { RoosterTheme } from '../../../../../themes/rooster';

import TotalBarStyled from '../TotalBarStyled';

const renderedComponent = (type = 0, width = 100) =>
  shallow(
    <TotalBarStyled
      theme={RoosterTheme}
      type={PredictionMock[type].type}
      width={width}
    />,
  );

describe('<TotalBarStyled />', () => {
  it('should render the component as `forecast type`', () => {
    const tree = toJson(renderedComponent(0));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component as `actual type`', () => {
    const tree = toJson(renderedComponent(1));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component `without width` if it is 0', () => {
    const tree = toJson(renderedComponent(1, 0));
    expect(tree).toMatchSnapshot();
  });
});
