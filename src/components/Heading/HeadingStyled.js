import styled from 'styled-components';

const TYPES = {
  h1: {
    fontSize: 'giga',
    lineHeight: 'kilo',
  },
  h2: {
    fontSize: 'mega',
    lineHeight: 'byte',
  },
  h3: {
    fontSize: 'kilo',
    lineHeight: 'byte',
  },
  h4: {
    fontSize: 'byte',
    lineHeight: 'bit',
  },
  h5: {
    fontSize: 'bit',
    lineHeight: 'bit',
  },
};

const HeadingStyled = styled('h3')`
  font-size: ${({ theme, as }) => theme.fontSize[(TYPES[as] || {}).fontSize]};
  font-weight: ${({ theme, bold }) =>
    theme.fontWeight[bold ? 'semiBold' : 'regular']};
  line-height: ${({ theme, as }) =>
    theme.lineHeight[(TYPES[as] || {}).lineHeight]};
  margin: 0 0 ${({ theme, noMargin }) => (noMargin ? 0 : theme.spacings.kilo)};
`;

export default HeadingStyled;
