const path = require('path');

module.exports = {
  entry : {
      _index : './public/js/_index',
      _a : './src/views/a/main',
      _c : './public/js/_c',
      _b : './public/js/_b',
  },
  output : {
    publicPath : 'www.elias.com',
    filename : '[name]_bundler.js',
    path : path.resolve(__dirname,'static/js')
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
  }
}
