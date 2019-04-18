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
    { from: './src/manifest.json' },
    { from: './src/icons', to: 'icons' }
  ])
};

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
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
