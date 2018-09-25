import styled from 'styled-components';

const TYPES = {
  h1: {
    fontSize: 'h1FontSize',
    lineHeight: 'h1LineHeight',
  },
  h2: {
    fontSize: 'h2FontSize',
    lineHeight: 'h2LineHeight',
  },
  h3: {
    fontSize: 'h3FontSize',
    lineHeight: 'h3LineHeight',
  },
  h4: {
    fontSize: 'h4FontSize',
    lineHeight: 'h4LineHeight',
  },
  h5: {
    fontSize: 'h5FontSize',
    lineHeight: 'h5LineHeight',
  },
};

const HeadingStyled = styled('h3')`
  font-size: ${({ theme, as }) => theme[(TYPES[as] || {}).fontSize]};
  font-weight: ${({ theme, bold }) =>
    theme[bold ? 'headingFontWeightBold' : 'headingFontWeightLight']};
  line-height: ${({ theme, as }) => theme[(TYPES[as] || {}).lineHeight]};
  margin: 0 0 ${({ theme, noMargin }) => (noMargin ? 0 : theme.headingSpacing)};
`;

export default HeadingStyled;
