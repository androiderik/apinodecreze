 var mongoose = require("mongoose");
 var bcrypt = require('bcryptjs');


 var validateEmail = function(Email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(Email)
};



 var registerUserSchema = new mongoose.Schema({
    Email: {
       type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email es obligatorio',
        validate: [validateEmail, 'E-mail inválido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'E-mail inválido']
    },
    username: {type: String,
        required: true, index: { unique: true } },
    password:  { type: String, required: true },
    UserName: { type: String, required: true}
  
   });


 var School= module.exports = mongoose.model('Registered', registerUserSchema, 'register');

module.exports.createUser = function(school, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(school.password, salt, function(err, hash) {
            school.password = hash;
            school.save(callback);
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
