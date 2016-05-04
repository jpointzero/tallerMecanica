var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/usuarios");

var usuario_schema = new Schema({
	email: String,
	password: String
});

var Usuario = mongoose.model("Usuario",usuario_schema);

module.exports.Usuario = Usuario;