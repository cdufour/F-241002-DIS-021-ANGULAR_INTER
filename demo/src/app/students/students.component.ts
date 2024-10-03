import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [
    {name: "Fanny", grade: 9},
    {name: "Kevin", grade: 2},
    {name: "Olivier", grade: 12},
  ];

  objStyle: any = {
    color: 'green',
    fontSize: '30pt'
  };

  objStyle2: any = {
    fontSize: '40pt',
    fontWeight: 'bold',
    textDecoration: 'underline'
  };

  objClass: any = {
    winner: true,
    loser: false
  }

  constructor() {
    setTimeout(() => {
      //this.objStyle.fontSize = '12pt';
      //this.objStyle.color = '#ff56e2';
      let mergeProps = {...this.objStyle, ...this.objStyle2};
      //this.objStyle = mergeProps;
      this.students[0].grade = 16;
      this.objClass = { winner: false, loser: true };
    }, 4000);
  }
}
