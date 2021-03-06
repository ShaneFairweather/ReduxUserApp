'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducer_posts = require('./reducer_posts');

var _reducer_posts2 = _interopRequireDefault(_reducer_posts);

var _reduxForm = require('redux-form');

var _reducer_signIn = require('./reducer_signIn');

var _reducer_signIn2 = _interopRequireDefault(_reducer_signIn);

var _reducer_users = require('./reducer_users');

var _reducer_users2 = _interopRequireDefault(_reducer_users);

var _actions_types = require('../actions/actions_types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    form: _reduxForm.reducer.plugin({
        postForm: function postForm(state, action) {
            // <------ 'account' is name of form given to reduxForm()
            switch (action.type) {
                case _actions_types.ACCOUNT_SAVE_SUCCESS:
                    return undefined; // <--- blow away form data
                default:
                    return state;
            }
        }
    }),
    posts: _reducer_posts2.default,
    signin: _reducer_signIn2.default,
    users: _reducer_users2.default
});

exports.default = rootReducer;

//# sourceMappingURL=reducer_index-compiled.js.map