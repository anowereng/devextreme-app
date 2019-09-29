import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { DxBoxModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { EmployeeCreateComponent } from './pages/employee/employee-create/employee-create.component';
import {
	DxSelectBoxModule,DxDataGridModule,
	DxTextAreaModule,
	DxDateBoxModule,
	DxFormModule, DxTextBoxModule
} from 'devextreme-angular';
import { Service } from './services/employee.service';
import { BasicSampleComponent } from './pages/component/basic-sample/basic-sample.component';
import { FormComponent } from './pages/component/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  EmployeeCreateComponent,
  BasicSampleComponent,
  FormComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,DxButtonModule , 	DxSelectBoxModule,
		DxTextAreaModule,
		DxDateBoxModule,DxTextBoxModule,DxDataGridModule,
		DxFormModule, DxBoxModule,ReactiveFormsModule
  ],
  providers: [AuthService, ScreenService, AppInfoService, Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
