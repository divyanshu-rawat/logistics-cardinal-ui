import React from 'react';
import styled from 'styled-components';

export const HrStyled = styled('hr')`
  ${({ theme }) => `
    border: 1px solid ${theme.hrBorderColor};
    margin-top: ${theme.labelBottomSpacing};
    margin-bottom: ${theme.labelBottomSpacing};
  `};
`;

const Hr = () => <HrStyled />;

export { Hr };
