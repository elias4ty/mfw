const webpack = require('webpack');
var webpackConfig = require('./webpack.dev.config.js');

webpack(webpackConfig,function(err,stats) {
    console.log(stats.toString({
        colors : true,
        modules: true,
        errors: true
    }))
});
