const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'master',
  repo: 'git@github.com:foodora/logistics-cardinal-ui.git',
  message: '[LIB] Auto-generated commit',
  dest: './dist',
});
