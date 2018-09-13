import styled from 'styled-components';

const TextStyled = styled.span`
  color: ${({ theme, color }) => color || theme.fontFamily.color};
  font-family: ${({ theme, fontFamily }) =>
    fontFamily || theme.fontFamily.default};
  font-weight: ${({ theme, weight }) => weight || theme.fontWeight.regular};
  text-align: ${({ align }) => align || 'left'};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'auto')};
  margin: ${({ margin, theme }) => margin || theme.composedSpacings.byte};
  font-size: ${({ fontSize, theme }) =>
    theme.fontSize[fontSize] || theme.fontSize.byte};
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
