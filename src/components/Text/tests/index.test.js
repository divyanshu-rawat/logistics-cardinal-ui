import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Text from '..';
import { RoosterTheme } from '../../../themes/rooster';

const renderedComponent = ({
  as = 'p',
  color = '#f00',
  fontFamily = 'Helvetica',
  weight = 300,
  align = 'center',
  truncate = false,
  uppercase = false,
  margin = '10px',
}) =>
  shallow(
    <Text
      theme={RoosterTheme}
      as={as}
      color={color}
      fontFamily={fontFamily}
      weight={weight}
      align={align}
      truncate={truncate}
      uppercase={uppercase}
      margin={margin}
    >
      Corinthians!
    </Text>,
  );

describe('<Text />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent({}));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with different props', () => {
    const tree = toJson(
      renderedComponent({
        as: 'strong',
        color: '#000',
        fontFamily: 'Times New Roman',
        weight: 500,
        align: 'right',
        truncate: true,
        uppercase: true,
        margin: '20px',
      }),
    );
    expect(tree).toMatchSnapshot();
  });
});
