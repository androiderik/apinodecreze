 var mongoose = require("mongoose");

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


 module.exports = mongoose.model('Registered', registerUserSchema, 'register');
