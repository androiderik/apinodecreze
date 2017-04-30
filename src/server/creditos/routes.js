var mongoose = require('mongoose');
var Creditos = require('../db/db').Creditos;
var express = require('express');
var router = express.Router();

/*GET Todos los creditos /creditos*/
router.get('/', function(req, res) { 
    Creditos.find({},function(err, results) {
        if (err) { console.log(err); }
        res.json(results);
    });
});


//POST/vote/<id>
    router.post('/:id', function (req, res) {
    var onSave = function(credito)
    {
      return function (err) {
        if(err) {
          return res.sendStatus(500).json(err)
        }
         res.json(credito)
          }
          }
      var id = req.params.id
      Creditos.findOne({showId : id}, function(err, doc)
      { 
        if(doc) {
          doc.count = doc.count + 1
          doc.save(onSave(doc))
        } else {
        var creditos = new  Creditos()
        creditos.showId = 1
        creditos.credito = id
        creditos.save(onSave(creditos))
        }
      }) //fin findOne
       }) //fin post

/*PUT  Actualiza credito /creditos/123*/ 
router.put('/:id', function(req, res) {
    var id = req.params.id;
    Creditos.update({ _id: mongoose.Types.ObjectId(id) }, {
        $set: { task: req.body.task }
    }, function(err) {
        if (err) { console.log(err); }

        res.send('Credito actualizado');
    });
});

/*DELETE un credito /creditos/123 */
router.delete('/:id', function(req, res) {
    var id = req.params.id;
    Creditos.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) { console.log(err); }

        res.send('Creditos eliminado');
    });
});


module.exports = router;
