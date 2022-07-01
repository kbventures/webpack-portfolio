const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
  entry: './src/js/app.js',
  mode: 'production',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },  
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: [
          'url-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
     
      new TerserPlugin({
        extractComments:false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

