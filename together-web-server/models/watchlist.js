var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create user schema
let watchlistSchema = new Schema({
    name: String,
    author: [], // add reference to user here
    stars: Number
});

// Create and export Video model
module.exports = mongoose.model('Watchlist', watchlistSchema);