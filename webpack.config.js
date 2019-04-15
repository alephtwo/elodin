const path = require('path');

const rules = {
  typescript: {
    test: /\.ts$/,
    use: 'awesome-typescript-loader'
  }
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
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  }
};
