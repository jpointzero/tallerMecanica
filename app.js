var express = require("express");
var bodyParser = require("body-parser")
var Usuario = require("./models/usuario").Usuario;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.set("view engine", "jade");

app.get("/",function(req,res){
	res.render("login");
});

app.get("/login",function(req,res){
	Usuario.find(function(err,doc){  
		console.log(doc);
		res.render("login");
	});
});

app.post("/usuarios", function(req,res){
	var usuario = new Usuario({email: req.body.email, 
						password: req.body.password,
						});

	usuario.save(function(){
		res.send("Guardamos tus datos")
	});	
	
});

app.listen(8080);
console.log("conexion establecida 8080");