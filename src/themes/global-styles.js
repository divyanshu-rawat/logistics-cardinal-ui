import { injectGlobal } from 'styled-components';
import 'normalize.css';

export const createGlobalStyles = (theme) => injectGlobal`
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
      -webkit-tap-highlight-color: rgba($black, 0);
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
  `;
