import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Avatar from '..';
// import PlaceholderPerson from '../placeholder-person.png';

const component = <Avatar src="" size="lg" />;

describe('Avatar', () => {
  it('should render the component', () => {
    const renderComponent = mount(component);
    expect(toJson(renderComponent)).toMatchSnapshot();
  });
});
