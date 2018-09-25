import SpacingBlockStyled from './SpacingBlockStyled';

const SpacingStyled = SpacingBlockStyled.extend`
  ${({ type, top, right, bottom, left, theme }) => `
    ${type}-top: ${top ? theme.spacing : 'auto'};
    ${type}-bottom: ${bottom ? theme.spacing : 'auto'};
    ${type}-left: ${left ? theme.spacing : 'auto'};
    ${type}-right: ${right ? theme.spacing : 'auto'};
  `};
`;

export default SpacingStyled;
