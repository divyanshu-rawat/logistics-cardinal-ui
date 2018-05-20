const ghpages = require('gh-pages');

ghpages.publish(
  'docs',
  {
    branch: process.env.TRAVIS_BRANCH,
    repo: `https://${
      process.env.GITHUB_TOKEN
    }@github.com/foodora/logistics-cardinal-ui.git`,
    message: '[DOCS] Auto-generated commit [ci skip]',
    dest: './docs',
  },
  (error) => console.log(error),
);
