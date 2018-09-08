import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideVisually } from 'polished';

const VALIDATION_STATE = {
  ERROR: 'error',
  SUCCESS: 'success',
  REGULAR: 'regular',
};

export const InputFeedbackStyled = styled('p')`
  display: block;
  padding: 0 3px;
  margin-bottom: 0;
  height: 18px;
  margin-top: ${({ theme }) => theme.spacings.byte};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.byte};
  ${({ hidden }) => hidden && hideVisually()};

  ${({ theme, state }) => {
    switch (state) {
      case VALIDATION_STATE.ERROR:
        return `
          color: ${theme.colors.red100};
        `;
      case VALIDATION_STATE.SUCCESS:
        return `
          color: ${theme.colors.green300};
        `;
      default:
        return `
          color: ${theme.colors.primary400};
        `;
    }
  }};
`;

const InputFeedback = ({ children, state, hidden }) => (
  <InputFeedbackStyled state={state} hidden={hidden}>
    {children}
  </InputFeedbackStyled>
);

InputFeedback.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.oneOf(Object.values(VALIDATION_STATE)).isRequired,
  hidden: PropTypes.bool,
};

InputFeedback.defaultProps = {
  state: 'regular',
};

export default InputFeedback;
