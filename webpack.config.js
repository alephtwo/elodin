const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const rules = {
  typescript: {
    test: /\.ts$/,
    use: 'awesome-typescript-loader'
  }
};

const plugins = {
  clean: new CleanWebpackPlugin(),
  copy: new CopyPlugin([
    { from: path.resolve(__dirname, 'src', 'manifest.json') },
    { from: path.resolve(__dirname, 'src', 'images'), to: 'images' }
  ])
};

const buildConfig = (entry, name) => {


  return {
    entry: path.resolve(__dirname, 'src', entry),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist', name)
    },
    module: {
      rules: [
        rules.typescript
      ]
    },
    plugins: [
      plugins.clean,
      plugins.copy
    ],
    resolve: {
      extensions: [
        '.ts',
        '.js'
      ]
    }
  };
};

module.exports = [
  buildConfig('firefox.ts', 'firefox'),
  buildConfig('chrome.ts', 'chrome')
];
