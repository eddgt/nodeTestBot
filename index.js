var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

const APP_TOKEN ='EAABnDFhXTZBABAP6oi6xmLmA8OnZBAQZCyFdpXnpHygBWkR0uZBMDCy0yKlduaISh2Ogul6Uvqf6RfZCIVXPwjOJDqw3fQuLCKoZCsx1V2u4avuHI59UvgKLoxCW3R2oyFwZBzEwJZC8DmnI2XZAJvdEpbnOB7fOwUZAA5igzCnp16gYQjIjiHuX3J'

var app = express();
app.use(bodyParser.json());

app.listen(3000, function(){
	console.log('El servidor se encuentra en el puerto 3000');

	});

app.get('/', function(req, res){
	res.send('Bienvenido al taller');
});

app.get('/webhook', function(req, res){
	if(req.query['hub.verify_token']==='test_token_say_hello'){
		res.send(req.query['hub.challenge']);

	}else{
		res.send('Tu no estas autorizado!');
	}
});