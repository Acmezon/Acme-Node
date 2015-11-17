describe('Data is loaded', function () {
	it('Should show a crunch of data', function (){
		browser.get('http://localhost:5000');
		var crunchies = element.all(by.repeater('contact in contactlist'));

		expect(crunchies.count()).toEqual(3);
	});
});