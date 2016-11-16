import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
   {{result}}
  `,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

 @Input() result: number = 0;
 // result: number = 1;

}
