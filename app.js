global.BASE_PATH = __dirname;
const koa = require('koa');
const router = require('koa-router')();
const render = require('./lib/render');
const nginx_router = require('./src/router/nginx_router');
const webpack = require('webpack');

var webpackConfig = require('./webpack.dev.config.js')
var app = new koa();

webpack(webpackConfig,function(err,stats) {
    console.log(stats.toString({
        colors : true,
        modules: true,
        errors: true
    }))
});

app.use(router.routes())
.use(router.allowedMethods());

nginx_router(router);

app.listen(1109);
