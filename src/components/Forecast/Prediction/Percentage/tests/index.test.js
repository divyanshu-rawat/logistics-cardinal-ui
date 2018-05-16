import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { PredictionMock } from '../../../../../utils/mocks';
import Percentage from '..';

const renderedComponent = () => shallow(<Percentage {...PredictionMock[0]} />);

describe('<Percentage />', () => {
  it('should render the component and print the correct percentage', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });
});
