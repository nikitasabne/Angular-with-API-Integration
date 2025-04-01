import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  Name: string = 'Getting familiar with Angular';
  CourseName: string = '.Net';
  isDisabled: boolean = true;

  showMsg() {
    alert('Better');
  }

  onStateChange(event: any) {
    var stateName = event.target?.['value'];
    alert('state changes: ' + stateName);
  }

  onMouseEnter() {
    console.log('Mouse Entered');
  }
}
