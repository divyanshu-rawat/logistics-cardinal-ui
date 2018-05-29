import { configure } from '@storybook/react';
import configureDecorators from './decorators';

/**
 * Load all Storybook stories
 */
function loadStories() {
  const req = require.context('../src', true, /\.story\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configureDecorators();
configure(loadStories, module);
