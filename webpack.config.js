var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './js/index.js',
  output: {
    path: path.join(__dirname, './src/'),
    filename: 'index.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ],
  devServer: {
    contentBase: './src',
    hot: true
  }
}
