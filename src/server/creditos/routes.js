var mongoose = require('mongoose');
var Creditos = require('../db/db');
var express = require('express');
var router = express.Router();

/*GET Todos los creditos /creditos*/
router.get('/', function(req, res) { 
    Creditos.find({}, function(err, results) {
        if (err) { console.log(err); }
        res.json(results);
    });
});


module.exports = router;
