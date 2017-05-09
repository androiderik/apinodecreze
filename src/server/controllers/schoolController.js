var mongoose = require("mongoose");
var School = require("../data/school");
var _ = require("underscore");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var router = require("express").Router();
router.route("/register/:id?").get(getSchools).post(addSchool).delete(deleteSchool);


function getSchools(req, res) {
    School.find(function (err, schools) {
        if (err)
            res.json(err);
        else
            res.json(schools);
    });
}

function addSchool(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    // Validation
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();


    var school = new School(_.extend({}, req.body));
        School.createUser(school, function (err, user){
            if(err) 
            res.json(err);
            
            else
            res.json(school);
        });
    


}

function deleteSchool(req, res) {
    var id = req.params.id;
    School.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

passport.use(new LocalStrategy(
  function(username, password, done) {
    School.getUserByUsername(username, function (err, user ) {
        if(err) throw err;
        if(!user) {
            return done(null, false, {message: 'Usuario desconocido'});
        }

    School.comparePassword(password, user.password, function (err, isMatch) {
        if(err) throw err;
        if(isMatch) {
            return done(null, user);
        } else {
            return done(null, false, {  message: 'Invalid pasword'});
        }
    })    
    })
      }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  School.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash:true}),
  function(req, res) {
   res.redirect('/');
  });



module.exports = router;