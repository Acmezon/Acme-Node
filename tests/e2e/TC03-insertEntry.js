
describe('An entry is created', function () {
	it('Should create a new entry', function (){
		browser.get('http://localhost:5000');

		//Contar el numero de contactos originales
		//var numContactsStart = element.all(by.repeater('contact in contactlist')).count();

		var numContactsStart = -1;
		var contacts = element.all(by.repeater('contact in contactlist')).count().then(function(contacts_def) {
			numContactsStart = contacts_def;
		});

		//Introducir los datos en los campos
		element(by.model('contact.name')).sendKeys('Jack Sparrow');
		element(by.model('contact.email')).sendKeys('JS@pirate.com');
		element(by.model('contact.number')).sendKeys('000 000 000');

		//Pulsamos el boton Add contact
		element(by.css('.btn-primary')).click();

		//Espermos a que carge los nuevos datos
		browser.waitForAngular();

		//Contar el numero de contactos Finales
		//var numContactsEnd = element.all(by.repeater('contact in contactlist')).count();


		var numContactsEnd = -1;
		var new_contacts = element.all(by.repeater('contact in contactlist')).count().then(function(new_contacts_def) {
			numContactsEnd = new_contacts_def;

			//Hacer el assert
			expect(numContactsEnd).toEqual(numContactsStart + 1);
		});


		
	});
});
