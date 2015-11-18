var request = require('supertest');
var should = require('should');
var assert = require('assert');

describe("Posting a contact to API", function (){
	it("posts a new contact to /contacts", function(){
		var contact = { name : 'Ale', email : 'post@ale.com', number : '987 65 69 98'};

		request("http://localhost:5000")
			.post("/contacts")
			.send(contact)
			.end(function(err, res){
				res.status.should.be.equal(200);
			});
	});
});