import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TextStyled from '../TextStyled';
import theme from '../../../themes/rooster';

const renderedComponent = ({
  color,
  fontFamily,
  weight,
  align,
  truncate,
  uppercase,
  margin,
}) =>
  shallow(
    <TextStyled
      theme={theme}
      color={color}
      fontFamily={fontFamily}
      weight={weight}
      align={align}
      truncate={truncate}
      uppercase={uppercase}
      margin={margin}
    >
      Corinthians!
    </TextStyled>,
  );

describe('<TextStyled />', () => {
  it('should render the component with the default props', () => {
    const tree = toJson(renderedComponent({}));
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with different props', () => {
    const tree = toJson(
      renderedComponent({
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
