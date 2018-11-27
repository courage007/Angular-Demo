import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  localText = 'Interact with the custom input component';
  changeLocalText() {
    this.localText = 'success';
  }

  update = 'update when init';
  updateAttribute() {
    this.update = 'update when click';
  }
}