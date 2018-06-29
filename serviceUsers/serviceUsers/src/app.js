var express = require('express');
var app = express();
var db = require('./config/db');

var UserController = require('./routes/UserController');
var EstudianteController = require('./routes/EstudianteController');
var CotizacionController = require('./routes/CotizacionController');
app.use('/users', UserController);
app.use('/estudiantes', EstudianteController);
app.use('/cotizaciones', CotizacionController);
module.exports = app;