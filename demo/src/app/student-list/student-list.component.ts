import { Component, OnInit } from '@angular/core';
import { Student } from '../students/student';
import { StudentService } from '../student.service';
import { tap, map } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  numLikes: number = 0;


  constructor(private studentService: StudentService) {
    //this.students = this.studentService.getStudents();
    
    
    // this.studentService.getStudents()
    //   .then(res => res.json())
    //   .then(students => this.students = students)
  }

  ngOnInit(): void {
    
    this.studentService.getStudents()
      .pipe(
        tap(n => console.log(n)),
        //map(n => [{name: 'toto', grade:3}])
      )
      .subscribe(students => this.students = students)
  
    }

  onLike(event: string) {
    console.log('like', event);
    this.numLikes++;
  }
}
