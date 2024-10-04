import { Component } from '@angular/core';
import { Student } from '../students/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  student: Student = {
    name: '',
    grade: 10
  }

  feedback: string = 'Veuillez remplir tous les champs';

  constructor(private studentService: StudentService) {}

  onSubmit(event: any): void {
    event.preventDefault();
    
    if (this.student.grade < 0 || this.student.grade > 20) {
      this.feedback = "La note doit être comprise entre 0 et 20";
      return;
    }

    // requête http
    this.studentService.postStudent(this.student)
      .subscribe(student => {
        this.feedback = `L'étudiant ${student.name} enregistré avec l'ID: ${student.id}`;
      })

    // ToDo: mettre à jour la liste des étudiants (StudentListComponent)

  }
}
