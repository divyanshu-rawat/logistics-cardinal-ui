import { css } from 'styled-components';

import 'react-select/dist/react-select.css';
import 'react-select-plus/dist/react-select-plus.css';

export function GlobalStorybookStyle() {
  return css`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

    /* used to overwrite bootstrap's background-color */
    table[class^='css-'] {
      background: white;
      td[class^='css-'] {
        white-space: initial;
      }
    }
  `;
}
