import { Component, Input } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  // private name: string = 'Konul';

  // items: TodoItem[] = [
  //   //interface sheklinde yazdiqda contructora ehtiyyac olmur bu shekilde yazmaq kifayet olur
  //   {  description: 'kalvalti', action: 'yes' },
  //   { description: 'spor', action: 'yes' },
  //   { description: 'alish verish', action: 'no' }

  //   //class sheklinde yazdiqda bele instans alib davam etmeliyik
  //   // new TodoItem('kahvalti', 'yes'),
  //   // new TodoItem('spor', 'yes'),
  //   // new TodoItem('alish verish', 'yes'),
  //   // new TodoItem('kahvalti', 'yes'),
  // ];

  // message = '';
  @Input() 

  displayAll: boolean = false;

  inputText: string = '';

  // message: string ="merhaba"

  model = new Model();

  // addItem(txtItem: any) {
  //   console.log(txtItem.value);
  // }

  constructor() {
    this.model.items = this.getItemsFromLS();
  }

  addItem() {
    if (this.inputText != '') {
      let data = { description: this.inputText, action: false };
      this.model.items.push(data);

      let items = this.getItemsFromLS();
      items.push(data);
      localStorage.setItem('items', JSON.stringify(items));
      this.inputText = '';
    } else {
      alert('melumat daxil edin');
    }
  }

  getItemsFromLS() {
    let items: TodoItem[] = [];

    let value = localStorage.getItem('items');

    if (value != null) {
      items = JSON.parse(value);
    }

    return items;
  }

  onActionChanged(item: TodoItem) {
    let items = this.getItemsFromLS();

    localStorage.clear();

    items.forEach(element=> {
      if (element.description == item.description) {
        element.action = item.action;
      }
    });

    localStorage.setItem('items', JSON.stringify(items));
  }

  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    } else {
      return this.model.items.filter((item) => !item.action);
    }
  }

  displayCount() {
    return this.model.items.filter((i) => i.action).length;
  }

  getBtnClasses() {
    return {
      disabled: this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-primary': this.inputText.length > 0,
    };
  }
}
