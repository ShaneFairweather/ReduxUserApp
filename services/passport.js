const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//Create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
//verify username and password, call done
    User.findOne({ email: email }, function(err, user) {
        if(err) { return done(err); }
        if (!user) { return done(null, false); }

        //compare passwords
        user.comparePasswords(password, function(err, isMatch) {
            if(err) { return done(err) };
            if(!isMatch) { return done(null, false) }

            return done(null, user);
        })
    });

});

//jwt configuration
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
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
passport.use(jwtLogin);
passport.use(localLogin);