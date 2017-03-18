'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    // author: {type: Schema.Types.ObjectId, ref: 'User'},
    author: String,
    // content: {type: String, required: true}
    content: String,
    avatar: String,
    date: String
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

//# sourceMappingURL=post-compiled.js.map