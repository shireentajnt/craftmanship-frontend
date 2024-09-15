import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component'; // Import the standalone component
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [EmployeeFormComponent,RouterOutlet] // Include the standalone component here
})
export class AppComponent {
  title = 'your-app-title';
}