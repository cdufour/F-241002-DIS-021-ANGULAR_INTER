import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { NgFor, NgIf } from '@angular/common';
import { ExosModule } from './exos/exos.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, NgIf, NgFor, ExosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Angular';
  visible: boolean = false;
  students = ['Fanny', 'Kevin', 'Olivier'];

  onClick(): undefined {
    console.log('ok');
  }
}
