import styled from 'styled-components';

const SwitchStyled = styled('div')`
  display: flex;
  align-items: center;
  label {
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.spacings.kilo};
  }
  .react-switch-bg {
    ${({ theme, active }) => {
      if (!active) {
        return `border: 1px solid ${theme.colors.grey200}`;
      }
      return '';
    }};
  }
`;

export default SwitchStyled;
