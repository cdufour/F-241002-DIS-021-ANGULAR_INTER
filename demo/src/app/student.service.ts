import { Injectable, Inject } from '@angular/core';
import { Student } from './students/student';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './app.module';
import { Observable } from 'rxjs';

//const API = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    {name: "Fanny", grade: 19},
    {name: "Kevin", grade: 2},
    {name: "Olivier", grade: 12},
  ];

  constructor(
    private httpClient: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) { }

  getStudentsSync(): Student[] {
    return this.students;
  }

  getStudents(): Observable<Student[]> {
    // retourne une promesse
    // return fetch(API);
    
    // retourne un observable
    return this.httpClient.get<Student[]>(this.apiUrl);
  }

  postStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.apiUrl, student);
  }
}
