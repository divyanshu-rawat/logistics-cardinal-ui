import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TextStyled from '../TextStyled';
import { rooster as RoosterTheme } from '../../../themes';

const renderedComponent = ({
  color,
  fontFamily,
  weight,
  align,
  truncate,
  uppercase,
  fontSize,
  margin,
  block,
}) =>
  shallow(
    <TextStyled
      theme={RoosterTheme}
      color={color}
      fontFamily={fontFamily}
      weight={weight}
      align={align}
      truncate={truncate}
      uppercase={uppercase}
      fontSize={fontSize}
      margin={margin}
      block={block}
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
        fontSize: 'mega',
        margin: '20px',
        block: true,
      }),
    );
    expect(tree).toMatchSnapshot();
  });
});
