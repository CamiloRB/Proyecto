var restful = require('node-restful');
var mongoose = restful.mongoose;

var statusSchema = new mongoose.Schema({
	id: String,
	idproducto: Number,
	nombre: String,
	cantidad: Number,
	precio: Number
});

module.exports = restful.model('venta', statusSchema);

