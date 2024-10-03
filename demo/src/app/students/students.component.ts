import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [
    {name: "Fanny", grade: 10},
    {name: "Kevin", grade: 2},
    {name: "Olivier", grade: 12},
  ]
}
