'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signinUser = signinUser;
exports.signupUser = signupUser;
exports.authError = authError;
exports.signoutUser = signoutUser;
exports.getUsers = getUsers;
exports.getPosts = getPosts;
exports.addPost = addPost;
exports.updateUsers = updateUsers;
exports.updatePosts = updatePosts;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = require('react-router');

var _actions_types = require('./actions_types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROOT_URL = 'http://localhost:3030';

function signinUser(_ref) {
    var email = _ref.email,
        password = _ref.password;

    return function (dispatch) {
        //submit email/pw to server
        _axios2.default.post(ROOT_URL + '/signin', { email: email, password: password }).then(function (response) {
            //update state to reflect authentication
            dispatch({ type: _actions_types.AUTH_USER });
            //save jwt token
            localStorage.setItem('token', response.data.token);
            //redirect route
            _reactRouter.browserHistory.push('/');
        }).catch(function () {
            //else show error to user
            dispatch(authError('Invalid email or password'));
        });
    };
}

function signupUser(_ref2) {
    var email = _ref2.email,
        username = _ref2.username,
        password = _ref2.password;

    return function (dispatch) {
        _axios2.default.post(ROOT_URL + '/signup', { email: email, username: username, password: password }).then(function (response) {
            dispatch({ type: _actions_types.AUTH_USER });
            localStorage.setItem('token', response.data.token);
            _reactRouter.browserHistory.push('/');
        }).catch(function (response) {
            return dispatch(authError('An account with that email already exists'));
        });
    };
}

function authError(error) {
    return {
        type: _actions_types.AUTH_ERROR,
        payload: error
    };
}

function signoutUser() {
    localStorage.removeItem('token');
    return function (dispatch) {
        dispatch({ type: _actions_types.UNAUTH_USER });
        _reactRouter.browserHistory.push('/');
    };
}

function getUsers() {
    var request = _axios2.default.get(ROOT_URL + '/users');
    // console.log(request);
    return {
        type: _actions_types.GET_USERS,
        payload: request
    };
}

function getPosts() {
    var request = _axios2.default.get(ROOT_URL + '/posts');
    console.log(request);
    console.log("get posts has been called!");
    return {
        type: _actions_types.GET_POSTS,
        payload: request
    };
}

function addPost(_ref3) {
    var author = _ref3.author,
        avatar = _ref3.avatar,
        content = _ref3.content;

    var request = _axios2.default.post(ROOT_URL + '/addpost', { author: author, avatar: avatar, content: content });
    // console.log(request);
    return {
        type: _actions_types.ADD_POST,
        payload: request
    };
}

function updateUsers(_ref4) {
    var email = _ref4.email,
        username = _ref4.username,
        password = _ref4.password;

    return function (dispatch) {
        return dispatch(signupUser({ email: email, username: username, password: password })).then(function () {
            return dispatch(getUsers());
        });
    };
}

function updatePosts(_ref5) {
    var author = _ref5.author,
        avatar = _ref5.avatar,
        content = _ref5.content;

    return function (dispatch) {
        return dispatch(addPost({ author: author, avatar: avatar, content: content })).then(function () {
            return dispatch(getPosts());
        });
    };
}

//# sourceMappingURL=actions_index-compiled.js.map