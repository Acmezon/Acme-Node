var request = require('supertest');
var should = require('should');
var assert = require('assert');

describe("Get contacts from the API", function (){
	it("get contacts from /contacts", function(){

		request("http://localhost:5000")
			.get("/contacts")
			.end(function(err, res){
				res.status.should.be.equal(200);
			});
	});
});