var mongoose = require('mongoose');

var EstudianteSchema = new mongoose.Schema({
    ci: String,
    cu: {NroCu: String,Carrera: String},
    apellido: String,
    nombre: String,
    dateCreate: String,
});
mongoose.model('Estudiante',EstudianteSchema);

module.exports = mongoose.model('Estudiante');