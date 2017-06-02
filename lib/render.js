const view = require('co-views'),
      path = require('path'),
      swig = require('swig');

module.exports = view(global.BASE_PATH+'/src/views',{
    map : {html:'swig'}
});
