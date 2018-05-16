const chalk = require('chalk');
const { execSync } = require('child_process');

const currentBranch = execSync('git symbolic-ref HEAD --short')
  .toString('utf-8')
  .trim();

if (currentBranch === 'master') {
  const message = `
        ${chalk.yellow('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')}
        ${chalk.red("Please, don't commit or push to master!".toUpperCase())}
        ${chalk.yellow('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')}
      `;
  throw message;
}
