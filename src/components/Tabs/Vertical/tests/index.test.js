import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VerticalTab from '..';
import Text from '../../../Text';

const renderComponent = () => (
  <VerticalTab
    active={0}
    onClick={jest.fn()}
    options={{
      forecast: (
        <Text as="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      ),
      history: (
        <Text as="p">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </Text>
      ),
    }}
  />
);

describe('<VerticalTab />', () => {
  it('should render the component', () => {
    const tree = toJson(shallow(renderComponent()));
    expect(tree).toMatchSnapshot();
  });
});
