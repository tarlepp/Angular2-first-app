import { Component, OnInit } from '@angular/core';
import { TestComponent } from '../test.component';

@Component({
  selector: 'app-another',
  template: `
    <p>
      another Works with inline template!
    </p>
    <app-test> </app-test>

  `,
  styleUrls: ['./another.component.css']
})
export class AnotherComponent {

  constructor() { }

}
