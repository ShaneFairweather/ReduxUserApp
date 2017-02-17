'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addPost = addPost;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addPost(post) {
    return {
        type: 'ADD_POST',
        payload: post
    };
}

//# sourceMappingURL=actions_index-compiled.js.map