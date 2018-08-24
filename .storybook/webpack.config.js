const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: 'react-svg-loader',
        options: {
          jsx: true, // true outputs JSX tags
        },
      },
    ],
  });

  return defaultConfig;
};
