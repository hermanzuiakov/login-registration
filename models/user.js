const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    userSchema = new Schema({
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            minLength: 5
        },

        password: {
            type: String,
            required: true,
            minLength: 6
        }
    });

module.exports = mongoose.model('users', userSchema);