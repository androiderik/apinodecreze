var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/creditos');

var Creditos = new mongoose.Schema({
	showId: {type: Number},
	credito: {type: String}
})


module.exports.Creditos = mongoose.model('Creditos', Creditos)


/*var Creditos = mongoose.model('Creditos', {
    title: String,
    isCompleted: Boolean,
    isEditing: Boolean
}); */
