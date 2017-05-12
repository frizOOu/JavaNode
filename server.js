var express = require('express'); 
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var model = require('./sample/sample.model.js');
var port = 8000;
var newdata;
var db;
mongoose.set('debug', true);
app.use(morgan('dev'));
app.set('port', (port));
//Mongodb connexion
mongoose.connect('mongodb://localhost:27017/test');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//Parse body to json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.once('open', ()=>{

	console.log('connected to : '+ port);

	app.post('save', (req, res)=>{

		newdata = new model(req.body);
		
		newdata.save((err, result)=>{

			if (err) console.error(err);
        	res.status(200).json(result);

		});
		
		db.disconnect();
	});

	app.get('find', (req, res)=>{

		model.find({}, (err, result)=>{

			if (err) console.error(err);
        	res.status(200).json(result);

		});

		db.disconnect();
	});

	app.put('put', (req, res)=>{
	
		db.disconnect();

	});
	
	app.delete('delete', (req, res)=>{

		model.findOneAndRemove({}, (err, result)=>{

			if (err) console.error(err);
			res.status(200).json(result);
		
		});
		
		db.disconnect();
	});
});