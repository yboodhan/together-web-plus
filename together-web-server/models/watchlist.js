// Import Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create user schema
let watchlistSchema = new Schema({
    name: String,
    author: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    stars: Number,
    videos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Video'}]
});

// Create and export Watchlist model
module.exports = mongoose.model('Watchlist', watchlistSchema);