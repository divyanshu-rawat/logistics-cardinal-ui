import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TimeSpanDisplay } from '..';
import { rooster as RoosterTheme } from '../../../themes';

const renderedComponent = (withSeconds = false) =>
  shallow(
    <TimeSpanDisplay
      theme={RoosterTheme}
      startAt="2017-12-01T10:00:00Z"
      fontSize="small"
      endAt="2017-12-01T12:00:00Z"
      withSeconds={withSeconds}
    />,
  );

describe('<TimeSpanDisplay />', () => {
  it('should render the component without seconds', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with seconds', () => {
    const tree = toJson(renderedComponent(true));
    expect(tree).toMatchSnapshot();
  });

  it('should ...', () => {
    const component = renderedComponent(true).dive();
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
