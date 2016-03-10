module.exports = function(app) {
    var controller = {};
    var Contato = app.models.contato;

    controller.authenticate = function(req, res) {
        console.log('===== authenticate');
        // res.status(200).end();
        res.redirect('/');
    };

    return controller;
};
