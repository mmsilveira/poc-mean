var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function() {
    var Usuario = mongoose.model('Usuario');

    passport.serializeUser(function(usuario, done) {
        console.log('===== serializeUser');
        done(null, usuario.id);
    });

    passport.deserializeUser(function(id, done) {
        console.log('===== desrializeUser');
        Usuario.findById(id, function(err, usuario) {
            done(err, usuario);
        });
    });

    passport.use('local', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
            session: false
        },
        function(req, email, password, done) {
            console.log('===== LocalStrategy');

            Usuario.findOne({
                'email': email
            }, function(err, user) {
                if (err)
                    return done(err);

                if (!user)
                    return done(null, false, 'No user found.');

                if (!user.validPassword(password))
                    return done(null, false, 'Oops! Wrong password.');

                return done(null, user);
            });

        }));

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
            session: false
        },
        function(req, email, password, done) {
            Usuario.findOne({
                'email': email
            }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {
                    return done(null, false, 'That email is already taken.');
                } else {
                    var newUser = new Usuario();

                    newUser.email = email;
                    newUser.password = newUser.generateHash(password);

                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });

        }));
};
