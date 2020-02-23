import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.minLength(8), this.space5]), 
    lastName: new FormControl('', [Validators.required]), 
    age: new FormControl('', [Validators.min(20), Validators.max(60)])
  });

  space5(control: AbstractControl): ValidationErrors | null {
    let val = <string>control.value;

    if ((val.length == 9) && (val.substr(4, 1) === '-')) return null;
    return {"spaceFive": true};
  }

  setToJohn() {
    const p: Person = {
      firstName: 'John', 
      lastName: 'Smith', 
      age: 42
    };

    this.form.setValue(p);
  }

  ngOnInit(): void {
  }

  
}
