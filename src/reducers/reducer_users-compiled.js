'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    // console.log(action.payload)
    switch (action.type) {
        case _actions_types.GET_USERS:
            return [].concat(_toConsumableArray(state), [action.payload.data]);
        default:
            return state;
    }
};

var _actions_types = require('../actions/actions_types');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = { all: [] };

//# sourceMappingURL=reducer_users-compiled.js.map