var mongoose = require("mongoose");
var School = require("../data/school");
var _ = require("underscore");
var crypto = require ("crypto");
var router = require("express").Router();

router.route("/register/:id?").get(getUsers).post(addUser).delete(deleteUser);
function getUsers(req, res) {
    School.find(function (err, schools) {
        if (err)
            res.json(err);
        else
            res.json(schools);
    });
}

function addUser(req, res) {
    var passwordEncrypt= function(Pass){
    let shasum = crypto.createHash('sha256')
    shasum.update(Pass)
    return shasum.digest('hex')
    };
    
    var school = new School(_.extend({}, req.body));
    school.save(function (err) {
        if (err)
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

module.exports = router;