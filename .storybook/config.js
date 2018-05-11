import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import Global from '../src/components/Global';
import Theme from '../src/theme';

function loadStories() {
  require('../src/stories');
}

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    <Global>{story()}</Global>
  </ThemeProvider>
));

configure(loadStories, module);
