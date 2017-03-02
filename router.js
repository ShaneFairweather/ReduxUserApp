const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const User = require('./models/user');
const Post = require('./models/post');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });


module.exports = function(app) {
    app.get('/', requireAuth, function(req, res) {
        res.send({ message: 'Code is activated' })
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);

    app.get("/users", function(req, res) {
        User.find({}, function(err, users) {
            if(err) {
                console.log(err)
            } else {
                res.send(users);
            }
        })
    });

    app.get("/posts", function(req, res) {
        Post.find({}, function(err, posts) {
            if(err) {
                console.log(err)
            } else {
                res.send(posts);
            }
        })
    });

    app.get("/users/:id", function(req, res) {
        res.send("These are the user screens");
    })
}

