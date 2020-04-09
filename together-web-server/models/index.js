// Import mongoose and connect
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/togetherweb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Export models
module.exports.User = require('./user');
module.exports.Video = require('./video');
module.exports.Watchlist = require('./watchlist');