// Import mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Import bcrypt for password
var bcrypt = require('bcryptjs');
const saltRounds = 12;

// Import models
var Watchlist = require('./watchlist');

// Create user schema
let userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    about: String,
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32
    },
    photo: String,
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    following: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    watchlist: [{type: mongoose.Schema.Types.ObjectId, ref: 'Watchlist'}]
});

// Password hashing by bcrypt
userSchema.pre('save', function(next) {
    // Only hash if it is new
    if (!user.isModified('password')) return next();

    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

// Exclude password from user data sent
userSchema.set('toJSON', {
    transform: (doc, user) => {
        delete user.password;
        delete user._v;
        return user;
    }
});

// Compare password hashes to check password
userSchema.methods.isValidPassword = function(typedPassword) {
    return bcrypt.compareSync(typedPassword, this.password);
};

// Create and export User model
module.exports = mongoose.model('User', userSchema);