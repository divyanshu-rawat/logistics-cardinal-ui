import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TabContainerList from '../TabContainerList';
import Text from '../../Text';
import theme from '../../../themes/rooster';

const mockAugmented = jest.fn();
const onClickFn = () => mockAugmented;

const options = {
  forecast: <Text as="p">Corinthians!</Text>,
  history: <Text as="strong">Palmeiras não tem mundial!</Text>,
};

const renderedComponent = ({ activeTab }) =>
  shallow(
    <TabContainerList
      options={Object.keys(options)}
      activeTab={activeTab}
      theme={theme}
      onClick={onClickFn}
    />,
  );

describe('<TabContainerList />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent({ activeTab: 0 }));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with activeTab set as 1', () => {
    const tree = toJson(renderedComponent({ activeTab: 1 }));
    expect(tree).toMatchSnapshot();
  });
});
