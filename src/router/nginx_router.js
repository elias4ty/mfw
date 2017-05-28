const a = require('../ctr/a');
const b = require('../ctr/b');
const c = require('../ctr/c');
const index = require('../ctr/index');

module.exports = function(router){
  router.get('/',index.getCtr);
    router.get('/ty/a',a.getCtr);
    router.get('/ty/b',b.getCtr);
    router.get('/ty/c',c.getCtr);
}
