const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rules = {
  typescript: {
    test: /\.tsx?$/,
    use: 'awesome-typescript-loader'
  },
  css: {
    test: /\.css$/,
    use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
  }
};

const plugins = {
  html: new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
  extractCss: new MiniCssExtractPlugin({
    filename: 'app.css',
    chunkFilename: '[id].css'
  })
};

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  output: { filename: 'app.js', path: __dirname },
  module: { rules: [ rules.typescript, rules.css ] },
  plugins: [ plugins.html, plugins.extractCss ],
  resolve: { extensions: [ '.tsx', '.ts', '.js' ] }
};
