 var mongoose = require("mongoose");

 var registerUserSchema = new mongoose.Schema({
    NombreCliente: String,
    Monto: String
   });


module.exports = mongoose.model('datos', registerUserSchema, 'creditos');
