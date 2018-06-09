var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect('mongodb://magrel:1998ENEro@ds253840.mlab.com:53840/negativa');

var app=express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 


app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use('/api' , require('./routes/api'));

app.listen(3001);
console.log('corriendi');

/*var VentaNegativa = require('./modelo/ventaNega');

//connecto to mon

mongoose.connect('mongodb://localhost/negativo');
var db = mongoose.connection;

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.get('/api/ventaNegativas', function(req, res){
	VentaNegativa.find({},function(err, ventaNegativas){

		if(err){
			throw err;
		}
		res.status(200).send(ventaNegativas);
		//res.jsonp(ventaNegativas);

	});
});

app.listen(3001);
console.log('Corriendo');*/