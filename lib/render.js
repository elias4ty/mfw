const nunjucks = require('nunjucks'),
      version = require('./version.json');

module.exports = function(){

    return function* (next){
        nunjucks.render(global.BASE_PATH+'/src/views',{version:version});

        this.nun = nunjucks.configure(global.BASE_PATH+'/src/views',{
            watch : true
        })
        yield * next
    }
}
