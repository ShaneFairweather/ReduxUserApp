'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signinUser = signinUser;
exports.signupUser = signupUser;
exports.authError = authError;
exports.signoutUser = signoutUser;

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
        password = _ref2.password;

    return function (dispatch) {
        _axios2.default.post(ROOT_URL + '/signup', { email: email, password: password });
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

//# sourceMappingURL=actions_index-compiled.js.map