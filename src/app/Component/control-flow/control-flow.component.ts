import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  isVisible: boolean = true;
  divVisible: string = 'yes';
  weekdays: string = '';
  IsVisible(event: any) {
    this.isVisible = event;
  }
}
