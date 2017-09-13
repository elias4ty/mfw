const webpack = require('webpack'),
      shell = require('shelljs');
var webpackConfig = require('./webpack.dev.config.js');
const merge = require('webpack-merge');

var webpackConfig = merge({
    output : {
        publicPath: 'www.tangyang.com'
    },
    resolve : {
        extensions : ['.css'],
        alias : {
            'src' : './src'
        }
    },
},webpackConfig)


shell.rm('-rf','./static');

webpack(webpackConfig,function(err,stats) {
    process.stdout.write(stats.toString({
        colors : true,
        modules: true,
        errors: true,
        publicPath : true
    }))
});
