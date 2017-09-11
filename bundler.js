const webpack = require('webpack'),
      shell = require('shelljs');
var webpackConfig = require('./webpack.dev.config.js');

shell.rm('-rf','./static/js');

webpack(webpackConfig,function(err,stats) {
    console.log(stats.toString({
        colors : true,
        modules: true,
        errors: true
    }))
});
