const dev = require('webpack-dev-middleware'),
      hot = require('webpack-hot-middleware'),
      config = require('./webpack.dev.config'),
      webpack = require('webpack'),
      express = require('express');

var compiler = webpack(config),app = express();

let devM = dev(compiler,{
    noInfo: true,
    publicPath : config.output.publicPath
})

let hotM = hot(compiler,{
    log:console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
});

app.use(devM);
app.use(hotM);

app.listen(1111,function (err) {
    if(err)
        console.log(err)
    else
        console.log('server.js suc: 1111')
})