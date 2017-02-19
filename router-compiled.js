'use strict';

var Authentication = require('./controllers/authentication');

module.exports = function (app) {
    app.post('/signup', Authentication.signup);
};

//# sourceMappingURL=router-compiled.js.map