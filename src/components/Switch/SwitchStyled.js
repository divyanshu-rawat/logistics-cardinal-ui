import styled from 'styled-components';

const SwitchStyled = styled('div')`
  display: flex;
  align-items: center;
  label {
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.switcherSpacingRight};
  }
  .react-switch-bg {
    ${({ theme, active }) => {
      if (!active) {
        return `border: 1px solid ${theme.switcherBorderColor}`;
      }
      return '';
    }};
  }
`;

export default SwitchStyled;
