import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { PredictionMock } from '../../../../../utils/mocks';
import TotalBar from '../TotalBar';

const renderedComponent = (type = 0) =>
  shallow(<TotalBar type={PredictionMock[type].type} width={100} />);

describe('<TotalBar />', () => {
  it('should render the component as `forecast type`', () => {
    const tree = toJson(renderedComponent(0));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component as `actual type`', () => {
    const tree = toJson(renderedComponent(1));
    expect(tree).toMatchSnapshot();
  });
});
