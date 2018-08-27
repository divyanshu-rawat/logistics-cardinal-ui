import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { VerticalTabButtonList } from '../VerticalTabButtonList';

const renderComponent = () => (
  <VerticalTabButtonList
    activeTab={0}
    onClick={jest.fn()}
    options={['Forecast', 'History']}
    theme={{ colors: { primary100: '' } }}
  />
);

describe('<VerticalTabButtonList />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(renderComponent()));
    expect(tree).toMatchSnapshot();
  });
});
