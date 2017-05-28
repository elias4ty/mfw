var render = require('../../lib/render');

exports.getCtr = function*(next){
    console.log('aaaaaaaaa')
    this.body = yield render('index.html',{
        title : 'aaaaaaaaaa'
    })
}
