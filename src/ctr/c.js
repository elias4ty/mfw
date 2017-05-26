exports.getCtr = function*(next){
    this.body = yield render('c.html',{
        title : 'c.html'
    })
}
