var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport'); //Middleware core de passport 
var routes = require('./src/server/routes');
var apiController = require('./src/server/creditos/api');
var schoolController = require("./src/server/controllers/schoolController");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser());
app.use(expressSession({
	secret: '1992',
	resave: false,
	saveUnitialized: false
	}));
app.use(passport.initialize());
app.use(passport.session());



app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", schoolController);
app.use("/api", apiController);

routes(app);

app.get('/signup', function(req, res){
	 res.sendFile(path.join(__dirname, 'public/signup.html'));
});

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

mongoose.connect("mongodb://localhost/api");
