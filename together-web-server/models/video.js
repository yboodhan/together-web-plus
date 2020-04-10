// Import mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Import models
const User = require('./user');

// Create user schema
let videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    description: String,
    thumbnail: String,
    views: String,
    likes: String,
    dislikes: String,
    link: String,
    watchlists: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

// Create and export Video model
module.exports = mongoose.model('Video', videoSchema);