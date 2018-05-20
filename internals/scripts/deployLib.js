const ghpages = require('gh-pages');

ghpages.publish(
  'dist',
  {
    branch: process.env.TRAVIS_BRANCH,
    repo: `https://${
      process.env.GITHUB_TOKEN
    }@github.com/foodora/logistics-cardinal-ui.git`,
    message: '[LIB] Auto-generated commit [ci skip]',
    dest: './dist',
  },
  (error) => console.log(error),
);
