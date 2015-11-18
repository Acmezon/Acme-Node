var request = require('supertest');
var should = require('should');
var assert = require('assert');

describe("Deleting a contact", function (){
	it("posts a new contact to contacts. should respond 200", function(){

		var id;

    	request("http://localhost:5000")
      	.get('/contacts')
      	.set('Accept', 'application/json')
      	.expect(function(res) {
        	id = res.body._id;
     	}).expect(200);




		request("http://localhost:5000")
			.delete("/contacts/" + id)
			.end( function( err, res) {
	            if (err) {
	              throw err;
	            }
	            res.status.should.be.equal(200);
	            done();

				});
		});
});