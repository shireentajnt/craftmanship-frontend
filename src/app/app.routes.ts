import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: 'employees', component: EmployeeListComponent },
    { path: 'add-employee', component: EmployeeFormComponent },
    { path: '', redirectTo: '/employees', pathMatch: 'full' },
    { path: 'employee-form', component: EmployeeFormComponent },
    { path: '', redirectTo: '/employee-form', pathMatch: 'full' }
];
