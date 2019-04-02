const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const typescript = {
  test: /\.tsx?$/,
  use: 'awesome-typescript-loader'
}

const css = {
  test: /\.css$/,
  use: [ 'style-loader', 'css-loader' ]
}

const html = new HtmlWebpackPlugin({
  template: 'src/index.html'
});

module.exports = {
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [typescript, css]
  },
  plugins: [html]
}
