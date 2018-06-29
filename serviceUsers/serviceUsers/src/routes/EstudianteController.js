var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Estudiante = require('../estudiante/Estudiante');

// CREATES A NEW USER
router.post('/', function(req, res) {
    
    Estudiante.create({
         ci: req.body.ci,
        cu:{NroCu:req.body.NroCu,Carrera: req.body.Carrera},
        apellido: req.body.apellido,
         nombre: req.body.nombre,
       dateCreate: new Date()
        },
        function(err, estudiante) {
            if (err) return res.status(500).send("There was a problem registering the estudiante.")
            res.status(200).send({ mensaje: "estudiante registrado" });
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function(req, res, next) {
    Estudiante.find({}, function(err, estudiantes) {
        if (err) return res.status(500).send("There was a problem finding the estudiante.");
        res.status(200).send(estudiantes);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function(req, res, next) {
    Estudiante.findById(req.params.id, function(err, estudiante) {
        if (err) return res.status(500).send("There was a problem finding the estudiante.");
        if (!estudiante) return res.status(404).send("No user found.");
        res.status(200).send(estudiante);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function(req, res, next) {
    Estudiante.findByIdAndRemove(req.params.id, function(err, estudiante) {
        if (err) return res.status(500).send("There was a problem deleting the estudiante.");
        res.status(200).send("Estudiante: " + estudiante.nombre + " was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function(req, res) {
    Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, estudiante) {
        if (err) return res.status(500).send("There was a problem updating the estudiante.");
        res.status(200).send(estudiante);
    });
});

module.exports = router;