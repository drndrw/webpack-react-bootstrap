const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      // {
      //   test: /\.(scss)$/,
      //   use: [{
      //     loader: 'style-loader', // inject CSS to page
      //   }, {
      //     loader: 'css-loader', // translates CSS into CommonJS modules
      //   }, {
      //     loader: 'postcss-loader', // Run post css actions
      //     options: {
      //       plugins: function () { // post css plugins, can be exported to postcss.config.js
      //         return [
      //           require('precss'),
      //           require('autoprefixer')
      //         ];
      //       }
      //     }
      //   }, {
      //     loader: 'sass-loader' // compiles Sass to CSS
      //   }]
      // },
    ]
  }
}
