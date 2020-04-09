// Import mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Import bcrypt for password
var bcrypt = require('bcryptjs');
const saltRounds = 12;

// Create user schema
let userSchema = new Schema({
    username: String,
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
    watchlists: [] // add reference here!
})

// Password hashing by bcrypt
userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
})

// Exclude password from user data sent
userSchema.set('toJSON', {
    transform: (doc, user) => {
        delete user.password;
        delete user._v;
        return user;
    }
})

// Compare password hashes to check password
userSchema.methods.isValidPassword = function(typedPassword) {
    return bcrypt.compareSync(typedPassword, this.password);
}

// Create and export User model
module.exports = mongoose.model('User', userSchema);