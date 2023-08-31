import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
@Input() name: string
@Output() change = new EventEmitter()

onChange() {
  this.change.emit('fsddfs')
}
}
