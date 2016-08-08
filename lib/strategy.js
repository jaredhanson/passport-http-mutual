// Load modules.
var passport = require('passport-strategy');


function MutualStrategy(options, verify) {
  passport.Strategy.call(this);
}

// Inherit from `passport.Strategy`.
util.inherits(MutualStrategy, passport.Strategy);


MutualStrategy.prototype.authenticate = function(req, options) {
  options = options || {};
  
  if (req.headers && req.headers['authorization']) {
    var parts = req.headers['authorization'].split(' ');
    if (parts.length >= 2) {
      var scheme = parts[0];
      var credentials = null;

      parts.shift();
      credentials = parts.join(' ');

      if (/Mutual/i.test(scheme)) {
        params = utils.parseHeader(credentials);
        header = params;
      }
    } else {
      return this.fail(400);
    }
  }
};


// Expose constructor.
module.exports = DialbackStrategy;
