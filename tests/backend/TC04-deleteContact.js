var request = require('supertest');
var should = require('should');
var assert = require('assert');

describe("Deleting a contact", function (){
	it("posts a new contact to contacts. should respond 200", function(){

		var id;
		console.log("Obtaining ID...");

    	request("http://localhost:5000")
      	.get('/contacts')
      	.set('Accept', 'application/json')
      	.end( function(err, res) {
      		id = res.body[0]._id;
      		console.log("Deleting contact with ID " + id);

			request("http://localhost:5000")
				.delete("/contacts/" + id)
				.end( function( err, res) {
		            if (err) {
		              throw err;
		            }
		            res.status.should.be.equal(200);

					});
     	}).expect(200);

      });

});