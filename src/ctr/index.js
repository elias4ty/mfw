var render = require('../../lib/render');

exports.getCtr = function*(next){
    this.body = yield render('index/index.html',{
        title : 'aaaaaaaaaa'
    })
}
