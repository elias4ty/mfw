const a = require('../ctr/a');
const b = require('../ctr/b');
const c = require('../ctr/c');

console.log('123',a)
module.exports = function(router){
    router.get('/ty/a',a.getCtr);
    router.get('/ty/b',b.getCtr);
    router.get('/ty/c',c.getCtr);
}
