const nunjucks = require('nunjucks'),
      version = require('./version.json');

module.exports = function(){

    return function* (next){

        this.nun = nunjucks.configure(global.BASE_PATH+'/src/views',{
            watch : true
        })

        try{
            this.nun.addGlobal('version',version);
        }catch(e){
            console.log('1010101',e)
        }
        yield * next
    }
}
