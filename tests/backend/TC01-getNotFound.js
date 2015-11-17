var request = require('supertest');
var should = require('should');
var assert = require('assert');

describe('Get test of unexistent crunchies', function () {
	it('Should return a 404 error', function (){
		request('http://localhost:5000')
			.get('/contacts/no_crunchies_allowed')
			.send()
			.end(function(err, res){
				res.status.should.be.equal(404);
		});
	});
});