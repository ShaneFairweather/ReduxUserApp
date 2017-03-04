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

    // app.get("/users/:id", function(req, res) {
    //     res.send("These are the user screens");
    // })

    app.post('/addpost', function(req, res, next) {
        console.log(req.body);
        const author = req.body.author;
        const content = req.body.content;
        // const author = "testing testing";
        // const content = "testing final";

        // if(!author || !content) {
        //     return res.status(422).send({error: 'You must provide post content'})
        // }

            const post = new Post({
                author: author,
                content: content,
            });

            post.save(function(err) {
                if(err) {
                    return next(err);
                }
                //creation success response
                // res.send("Post added");
                res.send(post);
                // res.json({ token: tokenForUser(user) });
            });
        });

}

