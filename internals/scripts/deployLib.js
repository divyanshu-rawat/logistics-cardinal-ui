const ghpages = require('gh-pages');

ghpages.publish(
  'dist',
  {
    branch: 'master',
    repo: `https://${
      process.env.GITHUB_TOKEN
    }@github.com/foodora/logistics-cardinal-ui.git`,
    message: '[LIB] Auto-generated commit',
    dest: './dist',
  },
  (error) => console.log(error),
);
