import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }
  private filterAsc = 'down';
  private filterDesc = 'up';
  private selectedContact: Contact = null;
  private activeSort: { field, dir } = { field: '', dir: '' };
  private activeFilter: { name, city, active } = { name: null, city: null, active: null };
  private cityDropdown: Boolean = false;

  private setCity(city) {
    this.activeFilter.city = city;
    this.cityDropdown = false;
  }

  private selectContact(contactId: Number) {
    this.selectedContact = this.contacts[this.contacts.findIndex(x => x.id === contactId)];
    console.log(this.selectedContact);
  }

  private toggleCity() {
    this.cityDropdown = !this.cityDropdown;
  }

  private sortContacts(field: any) {
    if (this.activeSort.dir === this.filterDesc) {
      this.contacts.sort((a, b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
    } else if (this.activeSort.dir === this.filterAsc) {
      this.contacts.sort((a, b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0));
    } else {
      this.contacts.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    }
  }

  private changeSort(field: String) {
    if (this.activeSort.field === field) {
      if (this.activeSort.dir === this.filterDesc) {
        this.activeSort.dir = this.filterAsc;
        this.sortContacts(field);
      } else {
        this.activeSort.field = null;
        this.activeSort.dir = null;
        this.sortContacts(field);
      }
    } else {
      this.activeSort.field = field;
      this.activeSort.dir = this.filterDesc;
      this.sortContacts(field);
    }
  }

  private filterContacts() {
    const self = this;
    this.contacts = this.origContacts.filter(function (e) {
      if (self.activeFilter.name) {
        if (self.activeFilter.name !== e.name) return false;
      }
      if (self.activeFilter.city) {
        if (self.activeFilter.city !== e.city) return false;
      }
      if (self.activeFilter.active) {
        if (self.activeFilter.active !== e.active) return false;
      }
      return true;
    });
  }

  private clearFilter() {
    this.activeFilter.name = null;
    this.activeFilter.city = null;
    this.activeFilter.active = null;
    this.contacts = this.origContacts;
  }

  ngOnInit() {

  }

  private origContacts: Contact[] = [{
    "id": 1,
    "name": "Nina",
    "surname": "Palmer",
    "city": "London",
    "email": "nina@gmail.com",
    "phone": "+44 20 7946 0964",
    "active": true
  }, {
    "id": 2,
    "name": "Jeff",
    "surname": "Brooks",
    "city": "Sydney",
    "email": "jeff.brooks@gmail.com",
    "phone": "+61 1900 654 321",
    "active": false
  }, {
    "id": 3,
    "name": "Anthony",
    "surname": "Hill",
    "city": "Los Angeles",
    "email": "a.hill@gmail.com",
    "phone": "+1 213 509 6995",
    "active": true
  }, {
    "id": 4,
    "name": "Shannon",
    "surname": "Hunt",
    "city": "Singapore",
    "email": "s.hunt@gmail.com",
    "phone": "+65 84624113",
    "active": true
  }, {
    "id": 5,
    "name": "Ryan",
    "surname": "Conner",
    "city": "Hong Kong",
    "email": "ryan@gmail.com",
    "phone": "+852 3772 3361",
    "active": true
  }, {
    "id": 6,
    "name": "Carol",
    "surname": "Caldwell",
    "city": "Hong Kong",
    "email": "c.c@gmail.com",
    "phone": "+852 2153 9983",
    "active": false
  }, {
    "id": 7,
    "name": "Keith",
    "surname": "Spencer",
    "city": "London",
    "email": "k.spencer@hotmail.com",
    "phone": "+44 20 7946 0145",
    "active": true
  }, {
    "id": 8,
    "name": "Stanley",
    "surname": "Reese",
    "city": "Sydney",
    "email": "stanley.reese@gmail.com",
    "phone": "+61 1900 654 321",
    "active": true
  }];

  private contacts: Contact[] = this.origContacts;

  private cities = (function () {
    var flags = [], output = [], l = this.origContacts.length, i;
    for (i = 0; i < l; i++) {
      if (flags[this.origContacts[i].city]) continue;
      flags[this.origContacts[i].city] = true;
      output.push(this.origContacts[i].city);
    }
    return output;
  })
}
