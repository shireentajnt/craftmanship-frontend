import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component'; // Adjust path if needed


const routes: Routes = [
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: '', redirectTo: '/employee-form', pathMatch: 'full' }, // Redirect or add other routes
  { path: '**', redirectTo: '/employee-form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
