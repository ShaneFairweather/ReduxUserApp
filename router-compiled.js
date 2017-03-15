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
        // res.send("These are the user screens");
        res.render('index.html');
    });

    app.post('/addpost', function (req, res, next) {
        console.log(req.body);
        var author = req.body.author;
        var content = req.body.content;
        var avatar = req.body.avatar;
        // const author = "testing testing";
        // const content = "testing final";

        // if(!author || !content) {
        //     return res.status(422).send({error: 'You must provide post content'})
        // }

        var post = new Post({
            author: author,
            content: content,
            avatar: avatar
        });

        post.save(function (err) {
            if (err) {
                return next(err);
            }
            //creation success response
            // res.send("Post added");
            res.send(post);
            // res.json({ token: tokenForUser(user) });
        });
    });
};

//# sourceMappingURL=router-compiled.js.map