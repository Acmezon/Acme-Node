var express = require('express');
var path = require('path');
var fs = require('fs');
var DataStore = require('nedb');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.set('port', (process.env.PORT || 5000));

var dbFileName = path.join(__dirname, 'contacts.json');
var db = new DataStore({
	filename : dbFileName,
	autoload : true
});


db.find({}, function (err, contacts) {
	if( contacts.length == 0 ) {
		console.log("No contacts, loading initial ones.");
		person1 = {
			name : 'Pablo',
			email : 'pafmon@gmail.com',
			number : '(34) 954 21 31 34'
		};

		person2 = {
			name : 'Pedro',
			email : 'pedro@gmail.com',
			number : '(34) 657 21 57 89'
		};

		db.insert([person1, person2]);
	} else {
		console.log(contacts.length + " contacts found.");
	}
});

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(cors());

app.get("/contacts", function(req, res) {
	db.find({}, function (err, contacts) {
		res.json(contacts);
	});
});

app.post("/contacts", function(req, res) {
	db.insert(req.body, function (err){
		if(err == null)
			res.sendStatus(200)
	});
});

app.delete("/contacts/:id", function(req, res) {
	var id = req.params.id;
	
	db.remove({_id : id}, {}, function(err, numRemoved) {
		if(numRemoved == 1)
			res.sendStatus(200);
		else
			res.sendStatus(404);
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});