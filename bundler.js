const webpack = require('webpack'),
      fs = require('fs'),
      path = require('path'),
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

var compiler = webpack(webpackConfig);
compiler.run(function(err,stats) {
    // process.stdout.write(stats.toString({
    //         colors : true
    // }))

    var dics = stats.compilation.getStats().toJson({
        assets : true
    }).assetsByChunkName;
    let version = {
        js : {},
        css : {}
    },verpath = path.join(__dirname,'static/')

    console.log('3737337',verpath);

    for(let d in dics){
        let key = d,val = dics[d];
        if(Array.isArray(val)){
            for(let v of val){
                v.endsWith('css') ? version.css[key] = verpath+v : version.js[key] = verpath+v
            }
        }else{
            val.endsWith('css') ? version.css[key] = verpath+val : version.js[key] = verpath+val
        }
    }
    // console.dir(version)
    fs.writeFile('./lib/version.json',JSON.stringify(version,null,3),(err) => {
        if(err)
            console.log(err)
        else
            console.log('写入 version 成功');
    })
});
