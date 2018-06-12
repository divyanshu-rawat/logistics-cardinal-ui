import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LinearGradient from '..';

const renderedComponent = () => {
  const stops = [
    {
      offset: '5%',
      stopColor: '#daa357',
      stopOpacity: 0.8,
    },
    {
      offset: '95%',
      stopColor: 'rgb(219,112,147)',
      stopOpacity: 0,
    },
  ];

  return shallow(<LinearGradient id="gradient" stops={stops} />);
};

describe('<LinearGradient />', () => {
  it('should render the component', () => {
    const wrapper = renderedComponent();
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
