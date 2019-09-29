import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  email: string;
  emailControl: AbstractControl;
  myForm: FormGroup;
  emailValue: string;
  rules: any;

  // employee: Employee;
	positions: string[];
  states: string[];
  
  ngOnInit() {
      this.myForm = new FormGroup({
          email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
      });
      this.emailControl = this.myForm.controls['email'];
  }
  constructor() {
    this.emailValue = 'smith@corp.com';
    this.rules = { "X": /[02-9]/ };

    // this.employee = service.getEmployee();
		// this.positions = service.getPositions();
		// this.states = service.getStates();
}
  getColumns() {
    return [
        { dataField: "firstName" },
        { dataField: "lastName" }
    ];
}

valueChanged(data) {
  this.emailValue = data.value.replace(/\s/g, "").toLowerCase() + "@corp.com";
}

}
