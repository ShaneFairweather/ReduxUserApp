'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signinUser = signinUser;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROOT_URL = 'http://localhost:3030';

function signinUser(_ref) {
    var email = _ref.email,
        password = _ref.password;

    return function (dispatch) {
        //submit email/pw to server
        _axios2.default.post(ROOT_URL + '/signin', { email: email, password: password });
        //update state to reflect authentication
        //save jwt token
        //redirect route


        //else show error to user
    };
}

//# sourceMappingURL=actions_signIn-compiled.js.map