import { UsersService } from './services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, ValidationErrors, AsyncValidatorFn, FormArray, FormBuilder } from '@angular/forms';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required, this.nameAvailable.bind(this)),
    firstName: new FormControl('', Validators.required), 
    lastName: new FormControl('', Validators.required), 
    age: new FormControl('', [Validators.min(18), Validators.max(100)]), 
    email: new FormControl('', [Validators.email]), 
    creditCard: new FormControl('', [AppComponent.space5]), 
    address: new FormGroup({
      street: new FormControl(''), 
      city: new FormControl('')
    }), 
    aliases: new FormArray([])
  });

  aliasesForms = this.form.get('aliases') as FormArray;

  constructor(
    private usersService: UsersService, 
    private fb: FormBuilder
    ) {
  }

  initForm() {
    this.form = this.fb.group({
      userName: ['', Validators.required], 
      aliases: this.fb.array([]), 
      address: this.fb.group({
        
      })
    })
  }

  addAlias() {
    this.aliasesForms.push(new FormControl(''));
  }

  removeAlias(index: number) {
    this.aliasesForms.removeAt(index);
  }


  static space5(control: AbstractControl): ValidationErrors | null {
    let val = <string>control.value;

    if ((val.length == 9) && (val.substr(4, 1) === '-')) return null;
    return {"spaceFive": true};
  }

  async nameAvailable(control: AbstractControl): Promise<ValidationErrors | null>  {
    let un = <string>control.value;

    console.log('starting search for free user names');

    let free = await this.usersService.verifyUserName(un);

    console.log(`free = ${free}`);

    if (free) return null;

    return {"availability": true}
  }


  setToJohn() {
    const p: Person = {
      userName: 'john', 
      firstName: 'John', 
      lastName: 'Smith', 
      age: 42, 
      email: 'john@yahoo.com', 
      creditCard: '4444-3232', 
      address: {
        street: 'Tavas', 
        city: 'Hod Hasharon'
      }, 
      aliases: ['Johny', 'jon jon']
    };

    this.form.setValue(p);
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.form.value);
  }
}
