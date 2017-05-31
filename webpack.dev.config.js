const path = require('path');

module.exports = {
  entry : {
      _index : './public/views/_index',
      _a : './public/views/_a',
      _b : './public/views/_b',
      _c : './public/views/_c'
  },
  output : {
    publicPath : 'www.elias.com',
    filename : '[name]_bundler.js',
    path : path.resolve(__dirname,'static/js')
  },
  module : {
    loaders: [
      {
        test : /\.js$/,
        loader : 'babel-loader',
        include : path.resolve(__dirname,'public/js'),
        options: {
             presets : ['es2015']
        }
      }
    ]
  }
}
