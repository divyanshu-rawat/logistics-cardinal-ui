import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import StyledSelect, {
  StyledSelectSmall,
  StyledSelectFull,
} from '../ForecastStyledSelect';

describe('<StyledSelect />', () => {
  it('should render the component', () => {
    const renderedComponent = shallow(<StyledSelect />);
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });
});

describe('<StyledSelectSmall />', () => {
  it('should render the component', () => {
    const renderedComponent = shallow(<StyledSelectSmall />);
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });
});

describe('<StyledSelectFull />', () => {
  it('should render the component', () => {
    const renderedComponent = shallow(<StyledSelectFull />);
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });
});
