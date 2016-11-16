import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';


@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})

export class DatabindingComponent {

  stringInterpolation = "I am string interpolation";
  numberInterpolation = 2;

  onTest() {
    return true;
  }

  onClicked(value: string){
    alert(value);
  }

}
