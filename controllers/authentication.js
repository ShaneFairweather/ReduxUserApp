const jwt = require('jwt-simple');
const User = require('../model/user.js');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

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
            password: password
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