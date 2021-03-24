const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: ['./src/app.js'],
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
      https: false,
      contentBase: './dist',
      open: false
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Weather APP'
    })
  ],
  
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              }
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.(gif|jpg|jpeg|png|svg)$/i,
              type: 'asset/resource'
          },
      ]
  }
};