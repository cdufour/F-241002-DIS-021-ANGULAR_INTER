import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  studentName: string | null = '';

  constructor(private route: ActivatedRoute) {
    let name = this.route.snapshot.paramMap.get('name');
    this.studentName = name;
  }

}
