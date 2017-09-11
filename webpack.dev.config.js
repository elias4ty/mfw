const path = require('path'),
      webpack = require('webpack');

module.exports = {
  entry : {
      _index : './public/js/_index',
      _a : './src/views/a/main',
      _c : './public/js/_c',
      _b : './public/js/_b',
      da : './public/js/chunk/da',
      db : './public/js/chunk/db'
  },
  output : {
    publicPath : 'www.elias.com',
    filename : '[name]_bundler.[chunkhash].js',
    path : path.resolve(__dirname,'static/js'),
    chunkFilename : 'chunk/[name]_bundler.js'
  },
  resolve :{
    extensions : ['.js','.vue']
  },
  module : {
    loaders: [
      {
        test : /\.js$/,
        loader : 'babel-loader',
        include : path.resolve(__dirname,'./public/js'),
        options: {
             presets : ['es2015']
        }
      },
      {
        test : /\.vue$/,
        loader : 'vue-loader',
        include : path.resolve(__dirname,'./src/views')
      }
    ]
  },
  plugins : [
    new webpack.optimize.CommonsChunkPlugin({
      name : 'ventor',
      minChunks : true
    }),
      new webpack.optimize.CommonsChunkPlugin({
        name : 'manifest',
        chunks : ['da','db']
      })
  ]
}
