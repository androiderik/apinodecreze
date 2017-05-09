 var mongoose = require("mongoose");
 var bcrypt = require('bcryptjs');


 var validateEmail = function(Email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(Email)
};



 var registerUserSchema = new mongoose.Schema({
    UserName: { type: String, required: true, index: { unique: true } },
  
    Email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email es obligatorio',
        validate: [validateEmail, 'E-mail inválido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'E-mail inválido']
    },
    username: {
        type: String,
        index:true
    },
    password: {
        type: String
    }
   });


 var School= module.exports = mongoose.model('Registered', registerUserSchema, 'register');

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.getUserByUsername = function (username, callback) {
    var query = {username: username};
    School.findOne(query, callback);
}

module.exports.getUserById = function (id, callback) {
    
    School.findById(id, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}
