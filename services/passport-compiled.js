'use strict';

var passport = require('passport');
var User = require('../model/user');
var config = require('../config');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local');

//Create local strategy
var localOptions = { usernameField: 'email' };
var localLogin = new LocalStrategy(localOptions, function (email, password, done) {
    //verify username and password, call done
    User.findOne({ email: email }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }

        //compare passwords
        user.comparePasswords(password, function (err, isMatch) {
            if (err) {
                return done(err);
            };
            if (!isMatch) {
                return done(null, false);
            }

            return done(null, user);
        });
    });
});

//jwt configuration
var jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
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
passport.use(jwtLogin);
passport.use(localLogin);

//# sourceMappingURL=passport-compiled.js.map