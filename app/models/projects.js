var mongoose = require('mongoose');

module.exports = mongoose.model('Projects', {
  name : {type : String, default: ''},
  description : {type : String, default: ''},
  details : {type : String, default: ''},
  url : {type : String, default: ''},
  priority : {type : Number, default: 0}
});
