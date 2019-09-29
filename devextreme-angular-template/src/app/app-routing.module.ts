import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthService, AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { EmployeeCreateComponent } from './pages/employee/employee-create/employee-create.component';
import { FormComponent } from './pages/component/form/form.component';
import { BasicSampleComponent } from './pages/component/basic-sample/basic-sample.component';

const appRoutes: Routes = [
  { path: 'pages',runGuardsAndResolvers: 'always', canActivate: [AuthGuardService],
    children: [
            { path: 'user', loadChildren: './pages/user-module/user.module#UserModule'},
           ]
          }  ,
          {    path: '**',
          redirectTo: 'home',
          canActivate: [ AuthGuardService ] },
           { path: 'login-form', component: LoginFormComponent },
           { path: 'employee', component: EmployeeCreateComponent },
           { path: 'basic-form', component: FormComponent },
           { path: 'basic-sample', component: BasicSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})

export class AppRoutingModule { }


