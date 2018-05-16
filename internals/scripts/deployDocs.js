const ghpages = require('gh-pages');

ghpages.publish(
  'docs',
  {
    branch: 'master',
    repo: `https://${
      process.env.GITHUB_TOKEN
    }@github.com/foodora/logistics-cardinal-ui.git`,
    message: '[DOCS] Auto-generated commit',
    dest: './docs',
  },
  (error) => console.log(error),
);
