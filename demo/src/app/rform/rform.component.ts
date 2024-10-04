import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css'
})
export class RformComponent {

  studentForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    grade: new FormControl(10, [Validators.min(0), Validators.max(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    postcode: new FormControl('', [Validators.required, Validators.pattern(/\d{5}/g)])
  })

}
