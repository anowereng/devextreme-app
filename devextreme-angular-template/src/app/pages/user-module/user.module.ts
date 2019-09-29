import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntrylistComponent } from './user-entrylist/user-entrylist.component';
import { UserRoutingModule } from './user-routing.module';
import { AuthService, ScreenService, AppInfoService } from 'src/app/shared/services';
import { Service } from 'src/app/services/employee.service';
import { DxBoxModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import {
	DxSelectBoxModule,DxDataGridModule,
	DxTextAreaModule,
	DxDateBoxModule,
	DxFormModule, DxTextBoxModule
} from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UserEntrylistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,DxButtonModule , 	DxSelectBoxModule,
		DxTextAreaModule,
		DxDateBoxModule,DxTextBoxModule,DxDataGridModule,
		DxFormModule, DxBoxModule,ReactiveFormsModule
  ],
  providers: [AuthService, ScreenService, AppInfoService, Service],
})
export class UserModule { }
