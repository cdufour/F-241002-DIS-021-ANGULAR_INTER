import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  
  @Input() name: string = '';
  @Input() grade: number = 10;
  @Output() onLike: EventEmitter<string> = new EventEmitter();

  onClick(name: string) {
    console.log('clic');
    this.onLike.emit(name);
  }
}
