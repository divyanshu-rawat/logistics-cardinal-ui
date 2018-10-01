import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from '../Heading';
import Icons from '../Icons';

export const AccordionItemHeaderStyled = styled('div')`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: ${({ theme }) => theme.accordionHeaderHeight};

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }

  .AccordionItemHeader {
    &__title {
      flex: 1;
      margin-bottom: 0;
      padding: 0 0 0 2px;
    }
    &__icon {
      padding: 0 10px 0 0;
    }
  }
`;

const AccordionItemHeader = ({ children, action, open }) => (
  <AccordionItemHeaderStyled onClick={action}>
    <Heading as="h3" className="AccordionItemHeader__title">
      {children}
    </Heading>
    <div className="AccordionItemHeader__icon">
      {open ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
    </div>
  </AccordionItemHeaderStyled>
);

AccordionItemHeader.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default AccordionItemHeader;
