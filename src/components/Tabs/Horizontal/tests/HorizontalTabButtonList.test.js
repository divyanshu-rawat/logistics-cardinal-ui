import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TabButtonList from '../HorizontalTabButtonList';
import Text from '../../../Text';
import theme from '../../../../themes/rooster';

const mockAugmented = jest.fn();
const onClickFn = () => mockAugmented;

const options = {
  forecast: <Text as="p">Corinthians!</Text>,
  history: <Text as="strong">Palmeiras não tem mundial!</Text>,
};

const renderedComponent = ({ activeTab }) =>
  shallow(
    <TabButtonList
      options={Object.keys(options)}
      activeTab={activeTab}
      theme={theme}
      onClick={onClickFn}
    />,
  );

describe('<TabButtonList />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent({ activeTab: 0 }));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with activeTab set as 1', () => {
    const tree = toJson(renderedComponent({ activeTab: 1 }));
    expect(tree).toMatchSnapshot();
  });

  it('should call onClickFn when Tab is clicked', () => {
    const component = renderedComponent({ activeTab: 1 });

    mockAugmented.mockClear();

    component
      .children()
      .first()
      .simulate('click');

    expect(mockAugmented.mock.calls.length).toBe(1);
  });
});
