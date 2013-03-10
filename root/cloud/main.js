exports.getConfig = function(params, callback) {
  console.log('In getConfig() call');
  var cfg = require('./config.js');
  return callback(null, {config: cfg.config});
};
