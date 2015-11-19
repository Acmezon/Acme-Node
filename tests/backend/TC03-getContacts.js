var request = require('supertest');
var should = require('should');
var assert = require('assert');

describe("Get contacts from the API", function (){
	it("get contacts from /contacts", function(){

		request("http://localhost:5000")
			.get("/contacts")
			.end(function(err, res){
				//console.log("Res: " + res.body.length);
				res.body.length.should.be.equal(3);
				res.status.should.be.equal(200);
			});
	});
});