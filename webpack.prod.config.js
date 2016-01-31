var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/main.js')
    ,vendors: ['react', 'react-dom']
  }

  ,output: {
    path: path.resolve(__dirname, 'public')
    ,filename: '[name].js'
  }

  ,plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ,new webpack.optimize.DedupePlugin()
    ,new webpack.optimize.UglifyJsPlugin({
      minimize: true
      ,compress: {
        warnings: false
      }
    })
  ]

  ,module: {
    loaders: [
      {
        test: /\.jsx?$/
        ,include: path.resolve(__dirname, 'src')
        ,loader: 'babel'
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
}
