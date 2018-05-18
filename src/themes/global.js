import { injectGlobal } from 'styled-components';

import 'react-select/dist/react-select.css';
import 'react-select-plus/dist/react-select-plus.css';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  table[class^="css-glamorous-table"] {
    background: white;
    td[class^="css-glamorous-td"] {
      white-space: initial;
    }
  }
`;
