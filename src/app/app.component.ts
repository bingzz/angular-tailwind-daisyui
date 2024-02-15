import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  modalData: any;

  openModal = () => {
    this.modalData = {
      name: 'irving',
      age: Math.random(),
    };
  };
}
