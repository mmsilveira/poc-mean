var passport = require('passport');

module.exports = function(app) {
    var controller = app.controllers.usuario;

    app.route('/login')
        .post(passport.authenticate('local', {
                failureRedirect: '/login'
            }),
            function(req, res) {
                res.redirect('/');
            }
        );

    app.route('/signup')
        .post(passport.authenticate('local-signup', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: false
        }));

    app.route('/logout').get(function(req, res) {
        req.logOut();
        res.redirect('/#/login');
    });
};
