var mongoose = require('mongoose');
var Creditos = require('../db/db').Creditos;
var express = require('express');
var router = express.Router();

/*GET Todos los creditos /creditos*/
router.get('/', function(req, res) { 
    Creditos.find(function(err, results) {
        if (err) { console.log(err); }
        res.send({ creditos: results });
    });
});

/*POST Credito /creditos*/
router.post('/:id', function(req, res) {
    var creditos = new Creditos(req.id);
    creditos.save(function(err, creditos) {
        if (err) { console.log(err); }
        res.json({title: creditos,
            isCompleted: false,
            isEditing: false})
        console.log('Credito guardado');
    });
});

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
