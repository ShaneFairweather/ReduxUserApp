'use strict';

var passport = require('passport');
var User = require('../model/user');
var config = require('../config');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

//jwt configuration
var jwtOptions = {
    jwtFromRequest: jwtFromRequest
};

//create jwt strategy
var jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    //see if userid in payload exists in database

    //call done with user

    //call done without user
    User.findById(payload.sub, function (err, user) {
        if (err) {
            return done(err, false);
        }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

//tell passport to use jwt

//# sourceMappingURL=passport-compiled.js.map