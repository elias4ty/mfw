const koa = require('koa');
const router = require('koa-router')();
const render = require('./lib/render');
const nginx_router = require('./src/router/nginx_router');

var app = new koa();
global.BASE_PATH = __dirname;
// app.use(render());
app.use(router.routes())
.use(router.allowedMethods());

nginx_router(router);
console.log(nginx_router)

app.listen(1107);
