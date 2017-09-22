global.BASE_PATH = __dirname;
const koa = require('koa');
const router = require('koa-router')();
const render = require('./lib/render');
const nginx_router = require('./src/router/nginx_router');

var app = new koa();

app.use(render());


app.use(router.routes())
.use(router.allowedMethods());

nginx_router(router);

app.listen(1109,function(err){
  if(err) {
    console.log('191919---',err)
      return
  }
  console.log('start at 1109')
});
