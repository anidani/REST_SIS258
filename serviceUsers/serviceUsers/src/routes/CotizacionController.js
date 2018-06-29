var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Cotizacion = require('../cotizacion/Cotizacion');

// CREATES A NEW USER
router.post('/', function(req, res) {
    
    Cotizacion.create({
         fecha: req.body.fecha,
         mcotizacion: req.body.mcotizacion, 
       dateCreate: new Date()
        },
        function(err, cotizacion) {
            if (err) return res.status(500).send("There was a problem registering the cotizacion.")
            res.status(200).send({ mensaje: "cotizacion registrado" });
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function(req, res, next) {
    Cotizacion.find({}, function(err, cotizaciones) {
        if (err) return res.status(500).send("There was a problem finding the estudiante.");
        res.status(200).send(cotizaciones);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:fecha', function(req, res, next) { 
    Cotizacion.find({fecha: req.params.fecha}, function(err, cotizacion) {
        if (err) return res.status(500).send("There was a problem finding the cotizacion.");
        if (!cotizacion) return res.status(404).send("No user found.");
        res.status(200).send(cotizacion);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function(req, res, next) {
    Cotizacion.findByIdAndRemove(req.params.id, function(err, cotizacion) {
        if (err) return res.status(500).send("There was a problem deleting the cotizacion.");
        res.status(200).send("Cotizacion: " + cotizacion.fecha+ " was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function(req, res) {
    Cotizacion.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, cotizacion) {
        if (err) return res.status(500).send("There was a problem updating the cotizacion.");
        res.status(200).send(cotizacion);
    });
});

module.exports = router;