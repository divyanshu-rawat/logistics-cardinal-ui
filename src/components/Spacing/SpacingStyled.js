import SpacingBlockStyled from './SpacingBlockStyled';

const SpacingStyled = SpacingBlockStyled.extend`
  ${({ type, top, right, bottom, left, theme }) => `
    ${type}-top: ${top ? theme.spacings.kilo : 'auto'};
    ${type}-bottom: ${bottom ? theme.spacings.kilo : 'auto'};
    ${type}-left: ${left ? theme.spacings.kilo : 'auto'};
    ${type}-right: ${right ? theme.spacings.kilo : 'auto'};
  `};
`;

export default SpacingStyled;
