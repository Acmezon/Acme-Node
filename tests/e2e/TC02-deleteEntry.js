
describe('An entry is deleted', function () {
	it('Should delete an entry', function (){
		browser.get('http://localhost:5000');

		var contacts_nr = -1;
		var contacts = element.all(by.repeater('contact in contactlist')).count().then(function(contacts_def) {
			contacts_nr = contacts_def;
		});

		element(by.css('.btn-danger')).click();
		browser.waitForAngular();

		var new_contacts_nr = -1;
		var new_contacts = element.all(by.repeater('contact in contactlist')).count().then(function(new_contacts_def) {
			new_contacts_nr = new_contacts_def;

			expect(new_contacts_nr).toEqual(contacts_nr - 1);
		});
		
	});
});
