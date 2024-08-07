import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private appComponent: AppComponent) {}

  showForm(formType: string) {
    this.appComponent.showForm(formType);
  }
}
