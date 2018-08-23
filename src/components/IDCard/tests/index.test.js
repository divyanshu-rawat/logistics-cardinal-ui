import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { IDCard } from '..';

const renderedComponent = () =>
  shallow(
    <IDCard
      imageSrc="image.png"
      name="Terry Mitchell"
      info="Captain"
      theme={{ fontSize: {}, fontWeight: {} }}
    />,
  );

describe('IDCard', () => {
  it('should render the component with default size', () => {
    const renderComponent = renderedComponent();
    expect(toJson(renderComponent)).toMatchSnapshot();
  });
});
