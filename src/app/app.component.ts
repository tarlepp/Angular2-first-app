import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding/databinding.component';
import { OtherComponent } from './other/other.component';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <app-other></app-other>
  <app-another></app-another>
  <app-databinding>  </app-databinding>


  `,
  styles: [`
   h1 {
    color: blue;
   } 
  `]
})
export class AppComponent {
  title = 'app works!';
}
