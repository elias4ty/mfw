global.BASE_PATH = __dirname;
const koa = require('koa');
const router = require('koa-router')();
const render = require('./lib/render');
const nginx_router = require('./src/router/nginx_router');
    // dev = require('webpack-dev-middleware'),
    // hot = require('webpack-hot-middleware'),
    // config = require('./webpack.dev.config'),
    // webpack = require('webpack');

var app = new koa();

// let compiler = webpack(config);

app.use(render());
// app.use(function *(next) {
//     dev(compiler,{
//         publicPath : '/resource/',
//         noInfo : true
//     })
//
//     yield* next
// });
// app.use(function* (next) {
//     hot(compiler)
//     yield *next
// });

app.use(router.routes())
.use(router.allowedMethods());

nginx_router(router);

app.listen(1109,function(){
  console.log('start at 1109')
});
