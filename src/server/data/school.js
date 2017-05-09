<<<<<<< HEAD
var mongoose = require("mongoose");
=======
 var mongoose = require("mongoose");
 var bcrypt = require('bcryptjs');
>>>>>>> recover3

 var validateEmail = function(Email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(Email)
};



 var registerUserSchema = new mongoose.Schema({
    UserName: { type: String, required: true, index: { unique: true } },
    Pass: { type: String, required: true },
    Email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email es obligatorio',
        validate: [validateEmail, 'E-mail inválido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'E-mail inválido']
    },
    User: {type: String, required: true, index: { unique: true } }
   });


 var School= module.exports = mongoose.model('Registered', registerUserSchema, 'register');

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.Pass, salt, function(err, hash) {
            newUser.Pass = hash;
            newUser.save(callback);
        });
    });
}

module.exports.getUserByUsername = function(User, callback){
    var query = {User: User};
    School.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
    School.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}
