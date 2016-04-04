var mongoose     = require('mongoose');
var bcrypt       = require('bcrypt-nodejs');

module.exports = function() {
    var schema = mongoose.Schema({
        email    : String,
        password : String
    });

    // methods ======================
    schema.methods.generateHash = function(password) {
        return password; //bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // checking if password is valid
    schema.methods.validPassword = function(password) {
        return true;//password === this.password;//bcrypt.compareSync(password, this.password);
    };

    return mongoose.model('Usuario', schema);
};
