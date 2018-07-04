import styled from 'styled-components';

const TooltipStyled = styled('div')`
  position: relative;
  &:hover {
    &:after {
      opacity: 0.9;
    }
  }
  &:after {
    content: ${({ content }) => `'${content}'`};
    border-radius: ${({ theme }) => theme.borderRadius.mega};
    background: ${({ theme }) => theme.colors.grey400};
    border: 1px solid ${({ theme }) => theme.colors.grey500};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.bit};
    padding: 4px 8px;
    position: absolute;
    left: 50%;
    top: -6px;
    transform: translateX(-50%) translateY(-100%) scale(0);
    text-align: center;
    width: 100%;
    max-width: 280px;
    min-width: 120px;
    pointer-events: none;
    opacity: 0;
    display: block;
    transition: opacity 0.2s linear 0.2s, transform 0.2s ease-out 0.2s;
  }
  ${({ position }) => {
    switch (position) {
      case 'top':
        return `
          &:hover {
            &:after {
              transform: translateX(-50%) translateY(-100%) scale(1);
            }
          }
          &:after {
            margin-bottom: 10px;
            transform-origin: center bottom;
            left:50%;
          }
        `;
      case 'right':
        return `
          &:hover {
            &:after {
              transform: translateX(0%) translateY(-50%) scale(1);
            }
          }
          &:after {
            left:100%;
            top:50%;
            transform: translateX(-10%) translateY(-50%);
            margin-left: 10px;
            filter: blur(0);
            transform-origin: left center;
          }
        `;
      case 'bottom':
        return `
          &:hover {
            &:after {
              transform: translateX(-50%) translateY(0%) scale(1);
            }
          }
          &:after {
            top:100%;
            left:50%;
            margin-top: 10px;
            transform: translateX(-50%) translateY(-10%);
            transform-origin: center top;
          }
        `;
      case 'left':
        return `
          &:hover {
            &:after {
              transform: translateX(-100%) translateY(-50%) scale(1);
            }
          }
          &:after {
            left:0%;
            top:50%;
            transform: translateX(-90%) translateY(-50%);
            margin-left: -10px;
            filter: blur(0);
            transform-origin: right center;
          }
        `;
      default:
        return '';
    }
  }};
`;

export default TooltipStyled;
