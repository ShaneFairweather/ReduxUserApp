const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    username: {type: String, unique: true},
    password: String,
    avatar: String,
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

//Encrypt on save hook

//Run before saving user
userSchema.pre('save', function(next) {
    //This is access to user model
    const user = this;

    //generate a salt then run callback
    bcrypt.genSalt(10, function(err, salt) {
        if(err) {
            return next(err);
        }

        //hash password using salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if(err) {
                return next(err)
            }

            //overwrite password with encrypted password
            user.password = hash;
            next();
        })
    })
});

userSchema.methods.comparePasswords = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) { return callback(err) }

        callback(err, isMatch);
    })
}


const ModelClass = mongoose.model('User', userSchema);

module.exports = ModelClass;