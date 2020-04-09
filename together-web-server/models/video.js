// Import mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create user schema
let videoSchema = new Schema({
    title: String,
    description: String,
    thumbnail: String,
    views: String,
    likes: String,
    dislikes: String,
    link: String,
    watchlists: [], // add reference to watchlists here
    users: [] // add reference to users here
});

// Create and export Video model
module.exports = mongoose.model('Video', videoSchema);