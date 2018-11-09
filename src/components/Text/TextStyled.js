import styled from 'styled-components';

const textSizeVariant = (size, theme) => {
  switch (size) {
    case 'xsmall':
      return theme.textFontSizeXSmall;
    case 'small':
      return theme.textFontSizeSmall;
    case 'large':
      return theme.textFontSizeLarge;
    case 'xlarge':
      return theme.textFontSizeXLarge;
    default:
      return theme.textFontSize;
  }
};

const TextStyled = styled('span')`
  color: ${({ theme, color }) => color || theme.textColor};
  font-family: ${({ theme, fontFamily }) => fontFamily || theme.textFontFamily};
  font-weight: ${({ theme, weight }) => weight || theme.textFontWeight};
  text-align: ${({ align }) => align || 'left'};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'auto')};
  margin: ${({ margin, theme }) => margin || theme.textSpacing};
  font-size: ${({ fontSize, theme }) => textSizeVariant(fontSize, theme)};
  display: ${({ block }) => (block ? 'block' : 'inline-block')};

  ${({ truncate }) => {
    if (truncate) {
      return `
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `;
    }

    return '';
  }};
`;

export default TextStyled;
