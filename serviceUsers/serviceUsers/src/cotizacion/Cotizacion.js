var mongoose = require('mongoose');

var CotizacionSchema = new mongoose.Schema({
    fecha: String,
     mcotizacion: String
});
mongoose.model('Cotizacion',CotizacionSchema);

module.exports = mongoose.model('Cotizacion');