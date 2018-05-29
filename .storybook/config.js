import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import { ThemeProvider } from 'styled-components';

import '../src/themes/global';

import Global from '../src/components/Global';
import themes from '../src/themes';

/**
 * Load all Storybook stories
 */
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

/**
 * Configure the Storybook UI
 */
function configureStorybook() {
  setOptions({
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'Logistics Cardinal UI',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: 'https://github.com/foodora/logistics-cardinal-ui',
  });
}

configureStorybook();
configure(loadStories, module);
