'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    username: String,
    password: String
});

//Encrypt on save hook

//Run before saving user
userSchema.pre('save', function (next) {
    //This is access to user model
    var user = this;

    //generate a salt then run callback
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }

        //hash password using salt
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {
                return next(err);
            }

            //overwrite password with encrypted password
            user.password = hash;
            next();
        });
    });
});

var ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;

//# sourceMappingURL=user-compiled.js.map