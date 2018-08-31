import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideVisually } from 'polished';

export const LabelStyled = styled('label')`
  display: block;
  padding: 0 3px;
  margin-bottom: ${({ theme }) => theme.spacings.byte};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme, hasError }) =>
    hasError ? theme.colors.red100 : theme.colors.primary400};
  font-size: ${({ theme }) => theme.fontSize.bit};

  ${({ hidden }) => hidden && hideVisually()};
`;

const Label = ({ children, ...props }) => (
  <LabelStyled {...props}>{children}</LabelStyled>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hasError: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default styled(Label)``;
