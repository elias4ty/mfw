exports.getCtr = function*(next){
    this.body = yield render('b.html',{
        title : 'b.html'
    })
}
