
describe('An entry is deleted', function () {
	it('Should delete an entry', function (){
		browser.get('http://localhost:5000');

		var contacts = element.all(by.repeater('contact in contactlist'));

		element(by.css('.btn-danger')).click();
		browser.waitForAngular();

		var new_contacts = element.all(by.repeater('contact in contactlist'));
		contacts.count().then(function(contacts) {
			contacts_new.count().then(function(new_contacts){
				expect(new_contacts).toEqual(contacts - 1);
			});
		});
	});
});
