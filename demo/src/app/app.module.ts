import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExosModule } from './exos/exos.module';
import { StudentsComponent } from './students/students.component';
import { ChoiceComponent } from './choice/choice.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RformComponent } from './rform/rform.component';
import { DemoRoutingModule } from './demo-routing/demo-routing.module';

export const API_URL = new InjectionToken<string>('API_URL');

@NgModule({
  declarations: [RootComponent, StudentsComponent, ChoiceComponent, StudentListComponent, StudentCardComponent, StudentFormComponent, RformComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ExosModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule
  ],
  bootstrap: [RootComponent],
  providers: [
    { provide: API_URL, useValue: 'http://localhost:3000/students' }
  ]
})
export class AppModule { }
