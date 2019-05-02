import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private dashboard = true;
  private contacts = false;
  private notifications = false;
  private profileDropdown = false;

  private clearView(): void {
    this.dashboard = false;
    this.contacts = false;
    this.notifications = false;
  }

  private gotoDashboard(): void {
    this.clearView();
    this.dashboard = true;
  }
  private gotoContacts(): void {
    this.clearView();
    this.contacts = true;
  }
  private gotoNotifications(): void {
    this.clearView();
    this.notifications = true;
  }
  private toggleDropdown() {
    this.profileDropdown = !this.profileDropdown;
  }
}
