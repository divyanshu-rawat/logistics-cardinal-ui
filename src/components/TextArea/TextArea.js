import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { InputStyled } from '../Input';

// TODO: remove this line when styled-components is upgraded
// https://www.styled-components.com/docs/basics#extending-styles (as prop)
const TextAreaStyled = styled(InputStyled.withComponent('textarea'))`
  ${({ theme }) => `
    overflow: auto;
    resize: vertical;
    height: auto;
    line-height: ${theme.textAreaLineHeight};
  `};
`;

const TextArea = ({ hasError, placeholder, ...props }) => (
  <TextAreaStyled hasError={hasError} placeholder={placeholder} {...props} />
);

TextArea.propTypes = {
  /**
   * Determines if the textarea has error and applies the correct style to it
   */
  hasError: PropTypes.bool,
  /**
   * For instance, Some text...
   * */
  placeholder: PropTypes.string,
};

export { TextArea, TextAreaStyled };
