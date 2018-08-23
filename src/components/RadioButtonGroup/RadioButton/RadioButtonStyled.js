import styled from 'styled-components';

const SIZE = 18;
const HALF_SIZE = SIZE / 2;

const RadioButtonLabelStyled = styled('label')`
  flex-align: row;
  align-items: center;
  cursor: pointer;
  position: relative;
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  margin-right: ${({ inline, theme }) => (inline ? theme.spacings.kilo : '')};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  &:hover:not(.is-selected) {
    &:before {
      border-color: ${({ theme }) => theme.colors.primary100};
    }
  }

  input {
    opacity: 0;
    position: absolute;
  }

  &:before {
    content: '';
    cursor: pointer;
    display: inline-block;
    border-radius: 99%;
    width: ${SIZE}px;
    height: ${SIZE}px;
    margin-right: ${({ theme }) => theme.spacings.kilo};
    border: 2px solid ${({ theme }) => theme.colors.grey600};
  }

  &:after {
    content: '';
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 99%;
    left: ${HALF_SIZE}px;
    top: ${HALF_SIZE}px;
    width: ${HALF_SIZE - 1}px;
    height: ${HALF_SIZE - 1}px;
    background: ${({ theme }) => theme.colors.primary100};
  }

  &.is-selected {
    &:after {
      opacity: 1;
    }
  }
`;

export default RadioButtonLabelStyled;
