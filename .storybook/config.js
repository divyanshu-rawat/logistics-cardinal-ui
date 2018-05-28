import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { ThemeProvider } from 'styled-components';

import '../src/themes/global';

import Global from '../src/components/Global';
import themes from '../src/themes';

function loadStories() {
  const req = require.context('../src', true, /\.story\.js$/);

  addDecorator((story) => {
    const content = story();
    const selectedTheme = select('Theme', ['rooster', 'hurrier'], 'rooster');

    // TODO Remove the following condition when we added a bootstrap for hurrier
    if (selectedTheme === 'rooster') {
      require(`../src/themes/${selectedTheme}/bootstrap/css/bootstrap.css`);
    }

    return (
      <ThemeProvider theme={themes[selectedTheme]}>
        <Global>{story()}</Global>
      </ThemeProvider>
    );
  });

  addDecorator(withKnobs);

  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
