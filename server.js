var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./src/server/routes');
var schoolController = require("./src//server/controllers/schoolController");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 7777;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", schoolController);

routes(app);

app.get('/', function (req, res){
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/about', function(req, res){
	 res.sendFile(path.join(__dirname, 'src/about/about.html'));
});

/*app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});*/ //Todo desplegaria a index excepto rutas con router express(el API)

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});

mongoose.connect("mongodb://localhost/schoolfinder");
