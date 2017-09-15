const qa = require('../ctr/qa');
const destination = require('../ctr/destination');
const c = require('../ctr/c');
const index = require('../ctr/index');

module.exports = function(router){
    console.log('7777')
    router.get('/',index.getCtr);
    router.get('/qa',qa.getCtr);
    router.get('/destination',destination.getCtr);
    router.get('/ty/c',c.getCtr);
}
