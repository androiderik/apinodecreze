var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./src/server/routes');

var PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

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
