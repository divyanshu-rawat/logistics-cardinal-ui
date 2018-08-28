import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const AccordionItemContentStyled = styled('div')`
  padding: 0 0 20px 0;
`;

const AccordionItemContent = ({ children }) => (
  <AccordionItemContentStyled>{children}</AccordionItemContentStyled>
);

AccordionItemContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AccordionItemContent;
