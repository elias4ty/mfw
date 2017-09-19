const dev = require('webpack-dev-middleware'),
      hot = require('webpack-hot-middleware'),
      config = require('./webpack.dev.config'),
      webpack = require('webpack'),
      express = require('express');

var compiler = webpack(config),app = express();

let devM = dev(compiler,{
    publicPath : '/resource/static/'
})

let hotM = hot(compiler);

app.use(devM);
app.use(hotM);

app.listen(1111,function (err) {
    if(err)
        console.log(err)
    else
        console.log('server.js suc: 1111')
})