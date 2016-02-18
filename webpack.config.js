var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map'

  ,devServer: {
    contentBase: './'
  }

  ,entry: {
    app: path.resolve(__dirname, 'src/main.js')
    ,vendors: ['react', 'react-dom']
  }

  ,output: {
    path: path.resolve(__dirname, 'public')
    ,filename: '[name].js'
  }

  ,module: {
    loaders: [
      {
        test: /\.jsx?$/
        ,include: path.resolve(__dirname, 'src')
        ,loader: 'react-hot!babel-loader'
      }
      ,{
        test: /\.scss$/
        ,include: path.resolve(__dirname, 'src')
        ,loader: 'style!css!sass'
      }

      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      ,{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" }
      ,{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" }
      ,{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" }
      ,{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" }
      ,{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }

  ,plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ,new webpack.optimize.DedupePlugin()
    ,new webpack.optimize.UglifyJsPlugin({
      minimize: false
      ,compress: {
        warnings: false
      }
    })
  ]
};
