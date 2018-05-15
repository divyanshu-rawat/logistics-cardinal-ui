const ghpages = require('gh-pages');

ghpages.publish('docs', {
  branch: 'master',
  repo: 'git@github.com:foodora/logistics-cardinal-ui.git',
  message: '[DOCS] Auto-generated commit',
  dest: './docs',
});
