var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/creditos');

var Creditos = mongoose.model('Creditos', {
    title: String,
    isCompleted: Boolean,
    isEditing: Boolean
});

module.exports.Creditos = Creditos;
