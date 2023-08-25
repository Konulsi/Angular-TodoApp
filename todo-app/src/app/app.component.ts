import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '.app-root',
  // selector: '#app-root',
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';

  todoItem = {
    description: 'kalvalti',
    action: true,
  };


  getTitle() {
    return this.title;
  }
}
