import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';

import storybookOptions from './options';
import infoOptions from './info';

import '../src/themes/global';
import Global from '../src/components/Global';
import themes from '../src/themes';

function themeDecorator(story) {
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
}

export default function configureDecorators() {
  setDefaults(infoOptions);
  setOptions(storybookOptions);
  addDecorator(centered);
  addDecorator(themeDecorator);
  addDecorator(withKnobs);
}
