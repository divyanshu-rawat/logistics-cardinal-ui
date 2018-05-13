import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { ThemeProvider } from 'styled-components';

import Global from '../src/components/Global';
import themes from '../src/themes';

function loadStories() {
  addDecorator((story) => {
    const content = story();
    const selectedTheme = select('Theme', ['rooster', 'hurrier'], 'rooster');
    return (
      <ThemeProvider theme={themes[selectedTheme || 'rooster']}>
        <Global>{story()}</Global>
      </ThemeProvider>
    );
  });
  addDecorator(withKnobs);

  require('../src/stories');
}

configure(loadStories, module);
