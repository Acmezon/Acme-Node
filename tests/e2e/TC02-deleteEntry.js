
describe('An entry is deleted', function () {
	it('Should delete an entry', function (){
		browser.get('http://localhost:5000');

		var contacts = element.all(by.repeater('contact in contactlist'));

		element(by.css('.btn-danger')).click();

		expect(element.all(by.repeater('contact in contactlist')).count()).toEqual(contacts.count() - 1);
	});
});