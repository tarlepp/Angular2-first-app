import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()"> Click me! </button>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  onClicked(){
    this.clicked.emit(" Event Emitter works!!!!");
  }
@Output() clicked = new EventEmitter();

}
