const path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry : [
      // _index : './src/views/index/main',
      './src/views/a/main',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'

      // da : './public/js/chunk/da',
      // db : './public/js/chunk/db'
      // 'index' : 'view/mfw/index/main'
  ],
  output : {
    publicPath : '/resource/',
    filename : 'bundler.js',
    path : __dirname,
    chunkFilename : 'static/js/chunk/[name]_bundler.js'
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
        filename: 'static/css/[name].css',
        allChunks : false // 当设置成 false 时，vue 中 require 的 css 文件就要用到 fallback 配置的 loader
    }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  ]
}
