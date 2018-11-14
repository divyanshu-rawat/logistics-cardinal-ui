import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { CardinalThemeProvider } from '../src/themes/Provider';
import storybookOptions from './options';
import infoOptions from './info';

import '../src/themes/global';
import Global from '../src/components/Global';
import { rooster, standard, hurrier } from '../src/themes';
import { GlobalStorybookStyle } from '../src/themes/global';

const themes = {
  rooster,
  hurrier,
  standard,
};

function themeDecorator(story) {
  const selectedTheme = select(
    'Theme',
    ['standard', 'rooster', 'hurrier'],
    'rooster',
  );

  return (
    <CardinalThemeProvider
      theme={themes[selectedTheme]}
      injectGlobal={GlobalStorybookStyle}
    >
      <Global>{story()}</Global>
    </CardinalThemeProvider>
  );
}

export default function configureDecorators() {
  setDefaults(infoOptions);
  setOptions(storybookOptions);
  addDecorator(centered);
  addDecorator(themeDecorator);
  addDecorator(withKnobs);
}
