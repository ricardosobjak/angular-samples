import {Component} from '@angular/core';

import {ContactService} from './contact.service';

@Component({
	moduleId: module.id,
	selector: 'contact-cmp',
  templateUrl: './contact.component.html'
})

export class ContactComponent {
	contacts: any;

	constructor(contactService: ContactService) {
		this.contacts = contactService.getContacts();
		console.log(this.contacts);
	}
}
