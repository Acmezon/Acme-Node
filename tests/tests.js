var DataStore = require('nedb');
var path = require('path');
var fs = require('fs');

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'e2e/TC01-loadData.js',
		'e2e/TC02-deleteEntry.js',
		'e2e/TC03-insertEntry.js',
		'backend/TC01-getNotFound.js',
		'backend/TC02-postContact.js',
		'backend/TC03-getContacts.js'
	],
	beforeLaunch: function() {
		var dbFileName = path.join(__dirname, '../','contacts.json');
		var db = new DataStore({
			filename : dbFileName,
			autoload : true
		});

		db.remove({}, { multi: true }, function (err, numRemoved) {
			console.log("Removed: " + numRemoved);
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

			person3 = {
				name : 'Ale',
				email : 'ale@gmail.com',
				number : '(34) 654 87 98 78'
			};

			db.insert([person1, person2, person3], function (err, newDocs) {
				console.log("Inserted: " + newDocs.length)
			});
		});
	},
};