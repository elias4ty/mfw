const koa = require('koa');
const router = require('koa-router')();
const render = require('./lib/render');
const nginx_router = require('./src/router/nginx_router');
var bodyparser = require('koa-bodyparser');

var app = new koa();
global.BASE_PATH = __dirname;

console.log(global.BASE_PATH)
app.use(router.routes())
.use(router.allowedMethods());

nginx_router(router);

app.listen(1107);
