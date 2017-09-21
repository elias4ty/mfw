const qa = require('../ctr/qa');
const destination = require('../ctr/destination');
const a = require('../ctr/a');
const index = require('../ctr/index');

module.exports = function(router){
    router.get('/index',index.getCtr);
    router.get('/qa',qa.getCtr);
    router.get('/destination',destination.getCtr);
    router.get('/ty/a',a.getCtr);
}
