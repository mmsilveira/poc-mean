var passport = require('passport');

module.exports = function(app) {
    // var controller = app.controllers.login;

    // app.post('/login', passport.authenticate('local-login', {
    //     successRedirect : '/profile',
    //     failureRedirect : '/login',
    //     failureFlash : true
    // }));

    // app.post('/login',
    // passport.authenticate('local', { failureRedirect: '/login' }),
    // function(req, res) {
    //     res.redirect('/');
    // });

    app.route('/login')
    .post(passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });

    app.route('/logout').get(function(req, res) {
        req.logOut();
        res.redirect('/');
    });
};
