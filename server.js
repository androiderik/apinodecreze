var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport'); //Middleware core de passport 
var expressValidator = require('express-validator');
var routes = require('./src/server/routes');
var apiController = require('./src/server/creditos/api');
var schoolController = require("./src/server/controllers/schoolController");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3001;

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use("/api", schoolController);
app.use("/api", apiController);

routes(app);

app.get('/signup', function (req, res){
	 res.sendFile(path.join(__dirname, 'public/signup.html'));
});

app.get('/login', function (req, res){
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/', ensureAuthenticated, function (req, res){
	res.sendFile(path.join(__dirname, 'public/index.html'));
});
function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    //req.flash('error_msg','You are not logged in');
    res.redirect('/signup');
  }
}

app.get('/about', function (req, res){
	 res.sendFile(path.join(__dirname, 'src/about/about.html'));
});


/*app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});*/ //Todo desplegaria a index excepto rutas con router express(el API)

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});

mongoose.connect("mongodb://localhost/api");
