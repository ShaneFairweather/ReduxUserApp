const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    username: String,
    password: String
});

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;