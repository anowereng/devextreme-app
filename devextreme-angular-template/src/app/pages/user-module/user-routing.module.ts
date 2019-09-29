import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEntrylistComponent } from './user-entrylist/user-entrylist.component';


const userRoutes: Routes = [
	{ path: 'user-entrylist', component: UserEntrylistComponent },
]

@NgModule({
	imports: [RouterModule.forChild(userRoutes)],
	exports: [RouterModule]
})
 export class UserRoutingModule { }
