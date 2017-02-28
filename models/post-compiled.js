'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    author: { type: String },
    content: { type: String, required: true }
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

//# sourceMappingURL=post-compiled.js.map