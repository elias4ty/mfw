const view = require('co-views'),
      swig = require('swig');

module.exports = view(global.BASE_PATH + '/src/views',{
    map : {html:'swig'}
});
