const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/components/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    '@storybook/addon-controls',
    'storybook-dark-mode',
    'storybook-css-modules-preset',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  staticDirs: ['../public'],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: "style-loader"},
          { loader: "css-modules-typescript-loader"},
          { loader: "css-loader"},
          { loader: "sass-loader"},
        ],
      }
    ],
  },
  webpackFinal: async (config, { configType }) => {
      config.resolve.plugins = config.resolve.plugins || [];
      config.resolve.plugins.push(
          new TsconfigPathsPlugin({
              configFile: path.resolve(__dirname, '../tsconfig.json'),
          })
      );
      return config;
  }
};
