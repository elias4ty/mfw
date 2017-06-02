var render = require('../../lib/render');

exports.getCtr = function*(next){
    this.body = yield render('a/a.html',{
        title : 'aaaaaaaaaa'
    })
}
