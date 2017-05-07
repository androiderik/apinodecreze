var mongoose = require("mongoose");
var Creditos= require("../data/creditos");
var _ = require("underscore");

var router = require("express").Router();


/* Rutas montadas a /api */
/*GET Todos los creditos /creditos*/
router.get('/creditos', function(req, res) { 

    Creditos.find({}, function(err, results) { //2do parametro de find es un callback (request asicronica)
        if (err) {
          return res.sendStatus(500).json(err) }
          res.json(results);
    });
});

router.post('/creditos', function(req, res) { 
    var creditos = new Creditos(_.extend({}, req.body));
    creditos.save(function (err) {
        if (err)
            res.send(err);
        else
            console.log('POST: creditos  ✓');
            res.json(creditos);
    });
});

router.delete('/creditos', function(req, res) { 
    var id = req.params.id;
    Creditos.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
});

module.exports = router;