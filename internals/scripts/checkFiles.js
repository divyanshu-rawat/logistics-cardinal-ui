const chalk = require('chalk');
const { execSync } = require('child_process');

(function verifyConfigFileIntegrity() {
  const stagedFiles = execSync('git diff --cached --name-only').toString(
    'utf-8',
  );

  const isStaged = stagedFiles.match(/dist\/|docs\//gi);

  if (isStaged && isStaged.length) {
    const message = `
        ${chalk.yellow('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')}
        ${chalk.red('You cannot commit ./dist/* or ./docs/*!'.toUpperCase())}
        ${chalk.yellow('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')}
      `;
    throw message;
  }
})();
