import { NgModule, Component, ViewChild } from '@angular/core';
import { Service, Employee } from 'src/app/services/employee.service';
import { DxSelectBoxModule, DxTextAreaModule, DxFormModule, DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})

export class EmployeeCreateComponent {

  @ViewChild(DxFormComponent, { static: false }) myform: DxFormComponent;
  employee: Employee;
  positions: string[];

  constructor(service: Service) {
    this.employee = service.getEmployee();
    this.positions = service.getPositions();
}

AfterViewInit() {
    this.myform.instance.validate();
}

}
