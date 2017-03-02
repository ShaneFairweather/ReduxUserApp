'use strict';

var Authentication = require('./controllers/authentication');
var passportService = require('./services/passport');
var passport = require('passport');
var User = require('./models/user');
var Post = require('./models/post');

var requireAuth = passport.authenticate('jwt', { session: false });
var requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
    app.get('/', requireAuth, function (req, res) {
        res.send({ message: 'Code is activated' });
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);

    app.get("/users", function (req, res) {
        User.find({}, function (err, users) {
            if (err) {
                console.log(err);
            } else {
                res.send(users);
            }
        });
    });

    app.get("/posts", function (req, res) {
        Post.find({}, function (err, posts) {
            if (err) {
                console.log(err);
            } else {
                res.send(posts);
            }
        });
    });

    app.get("/users/:id", function (req, res) {
        res.send("These are the user screens");
    });
};

//# sourceMappingURL=router-compiled.js.map