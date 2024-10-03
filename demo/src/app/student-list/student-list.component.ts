import { Component } from '@angular/core';
import { Student } from '../students/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: Student[] = [];
  numLikes: number = 0;


  constructor(private studentService: StudentService) {
    //this.students = this.studentService.getStudents();
    
    
    // this.studentService.getStudents()
    //   .then(res => res.json())
    //   .then(students => this.students = students)

    this.studentService.getStudents()
      .subscribe((students: any) => this.students = students)
    
  }

  onLike(event: string) {
    console.log('like', event);
    this.numLikes++;
  }
}
