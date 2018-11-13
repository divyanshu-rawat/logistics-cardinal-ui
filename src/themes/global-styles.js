import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => `
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      box-sizing: border-box;
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -ms-overflow-style: scrollbar;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      [type='button'] {
        appearance: none;
      }
    }

    body {
      margin: 0;
      background-color: ${theme.bodyBackground};
      color: ${theme.textColor};
      font-family: ${theme.textFontFamily};
      font-size: ${theme.textFontSize};
      font-weight: ${theme.textFontWeight};
      line-height: ${theme.lineHeightBase};
    }

    fieldset {
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }

    .Drawer {
      &--is-open {
        overflow: hidden;
      }
    }

    .ReactModal {
      &__Overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: opacity 200ms ease-in-out;
        z-index: ${theme.zIndex.modalOverlay};
        background-color: ${theme.overlayColor};
        &--after-open {
          opacity: 1;
        }
        &--before-close {
          opacity: 0;
        }
      }
      &__Content {
        position: fixed;
        left: 50%;
        right: auto;
        top: 50%;
        bottom: auto;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 200ms ease-in-out;
        min-height: ${theme.modalMinHeight};
        min-width: ${theme.modalMinWidth};
        width: ${theme.modalWidth};
        max-width: ${theme.modalMaxWidth};
        background-color: ${theme.modalBackgroundColor};
        border: 1px ${theme.modalBorderStyle} ${theme.modalBorderColor};
        box-shadow: ${theme.modalBoxShadow};
        border-radius: ${theme.modalBorderRadius};
        outline: ${theme.modalOutline};
        z-index: ${theme.zIndex.modalContent};
        &--after-open {
          opacity: 1;
        }
        &--before-close {
          opacity: 0;
        }
      }
    }
  `}
`;
