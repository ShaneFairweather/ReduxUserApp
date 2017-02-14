'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addPost = addPost;
function addPost(post) {
    console.log(post.content);
    return {
        type: 'ADD_POST',
        payload: post
    };
}

//# sourceMappingURL=actions_index-compiled.js.map