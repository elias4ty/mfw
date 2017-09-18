const path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry : {
      // _index : './src/views/index/main',
      // _a : './src/views/a/main'
      // da : './public/js/chunk/da',
      // db : './public/js/chunk/db'
      'index' : 'view/mfw/index/main'
  },
  output : {
    publicPath : '/resource/',
    filename : 'js/[name]_bundler.[chunkhash:7].js',
    path : path.resolve(__dirname,'static'),
    chunkFilename : 'js/chunk/[name]_bundler.js'
  },
  resolve : {
      extensions: ['.js', '.vue'],
      alias: {
        'public': path.resolve(__dirname, 'public'),
        'view' : path.resolve(__dirname,'src/views')
      }
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
        include : path.resolve(__dirname,'./src/views'),
          options: {
              loaders : {
                  css : ExtractTextPlugin.extract({
                      use : 'css-loader',
                      fallback : 'vue-style-loader'
                  })
              }
          }
      },
      {
        test : /\.css$/,
        loader: ExtractTextPlugin.extract({
            use : 'css-loader',
            fallback : 'vue-style-loader'
        })
      }
    ]
  },
  plugins : [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name : 'ventor'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //    name : 'manifest',
    //     chunks : ['ventor']
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress : {
    //        warnings : false
    //     },
    //     mangle : false
    // }),
    new ExtractTextPlugin({
        filename: 'css/[name]_[contenthash:7].css',
        allChunks : false // 当设置成 false 时，vue 中 require 的 css 文件就要用到 fallback 配置的 loader
    })
  ]
}
