import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VerticalTabContainerList from '../VerticalTabContainerList';

const renderComponent = () => (
  <VerticalTabContainerList activeTab={0} options={['Forecast', 'History']} />
);

describe('<VerticalTabContainerList />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(renderComponent()));
    expect(tree).toMatchSnapshot();
  });
});
