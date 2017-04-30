var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/creditos');

var Creditos = new mongoose.Schema({
	showId: {type: Number},
	title: {type: String}
})

mongoose.model('Creditos', Creditos);

module.exports.Creditos = Creditos;












