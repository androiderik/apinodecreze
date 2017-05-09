var mongoose = require("mongoose");
var School = require("../data/school");
var _ = require("underscore");
<<<<<<< HEAD
var crypto = require ("crypto");
=======
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


>>>>>>> recover3
var router = require("express").Router();

<<<<<<< HEAD
router.route("/register/:id?").get(getUsers).post(addUser).delete(deleteUser);
function getUsers(req, res) {
=======

function getSchools(req, res) {
>>>>>>> recover3
    School.find(function (err, schools) {
        if (err)
            res.json(err);
        else
            res.json(schools);
    });
}

<<<<<<< HEAD
function addUser(req, res) {
    var passwordEncrypt= function(Pass){
    let shasum = crypto.createHash('sha256')
    shasum.update(Pass)
    return shasum.digest('hex')
    };
    
=======
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


>>>>>>> recover3
    var school = new School(_.extend({}, req.body));
        School.createUser(school, function (err, user){
            if(err) 
            res.json(err);
            
            else
            res.json(school);
        });
    


}

function deleteUser(req, res) {
    var id = req.params.id;
    School.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}


        passport.use(new LocalStrategy(
      function (User, Pass, done) { 
                School.getUserByUsername(User, function (err, user){
                if(err) throw err;
                if(!User){
                    return done(null, false, {message: 'Unknown User'});
                }

                School.comparePassword(Pass, user.Pass, function(err, isMatch){
                    if(err) res.send(err);
                    if(isMatch){
                        return done(null, user);
                    } else {
                        return done(null, false, {message: 'Invalid password'});
                    }
                });
               });
              }));

        passport.serializeUser(function(user, done) {
          done(null, user.id);
        });

        passport.deserializeUser(function(id, done) {
          School.getUserById(id, function(err, user) {
            done(err, user);
          });
        });


router.post('/login', function(req, res, next) {
  // generate the authenticate method and pass the req/res
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { console.log(err) }

    // req / res held in closure
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.send(user);
    });

  })(req, res, next);

});



module.exports = router;