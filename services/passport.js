const passport = require('passport');
const User = require('../model/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//jwt configuration
const jwtOptions = {
    jwtFromRequest
};

//create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    //see if userid in payload exists in database

    //call done with user

    //call done without user
    User.findById(payload.sub, function(err, user) {
        if(err) { return done(err, false) }

        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }


    })
});

//tell passport to use jwt