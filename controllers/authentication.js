const jwt = require('jwt-simple');
const User = require('../models/user.js');
const config = require('../config');
var gravatar = require('gravatar');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
//token for signed in user
    res.send({ token: tokenForUser(req.user )});
};

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    // const avatar = email.trim().toLowerCase()

    if(!email || !password) {
        return res.status(422).send({error: 'You must provide an email address and a password'})
    }

    //Check if user exists
    User.findOne({ email: email }, function(err, existingUser) {
        if(err) {
            return next(err);
        }

        //return err if user exists
        if(existingUser) {
            return res.status(422).send({error: 'Email is in use'})
        }

        //save user if user does not exist
        const user = new User({
            email: email,
            username: username,
            password: password,
            avatar: gravatar.url(email, {s: '100', r: 'x', d: 'retro'}, true)
        });

        user.save(function(err) {
            if(err) {
                return next(err);
            }

            //creation success response
            res.json({ token: tokenForUser(user) });
        });
    });


}