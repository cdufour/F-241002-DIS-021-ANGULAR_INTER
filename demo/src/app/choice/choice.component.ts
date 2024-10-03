import { Component } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css'
})
export class ChoiceComponent {
  selectedOption: string = '';

  onChange(event: any) {
    this.selectedOption = event.target.value;
  }

}
