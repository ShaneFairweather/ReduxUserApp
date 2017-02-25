'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducer_posts = require('./reducer_posts');

var _reducer_posts2 = _interopRequireDefault(_reducer_posts);

var _reducer_postList = require('./reducer_postList');

var _reducer_postList2 = _interopRequireDefault(_reducer_postList);

var _reduxForm = require('redux-form');

var _reducer_signIn = require('./reducer_signIn');

var _reducer_signIn2 = _interopRequireDefault(_reducer_signIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    form: _reduxForm.reducer,
    posts: _reducer_posts2.default,
    postList: _reducer_postList2.default,
    signin: _reducer_signIn2.default
});

exports.default = rootReducer;

//# sourceMappingURL=reducer_index-compiled.js.map