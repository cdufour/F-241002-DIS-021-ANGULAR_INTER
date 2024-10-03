import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExosModule } from './exos/exos.module';
import { StudentsComponent } from './students/students.component';
import { ChoiceComponent } from './choice/choice.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RootComponent, StudentsComponent, ChoiceComponent, StudentListComponent, StudentCardComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ExosModule,
    HttpClientModule
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
