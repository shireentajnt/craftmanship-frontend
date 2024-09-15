import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component'; // Adjust path if needed
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule, // Include routing module
    EmployeeFormComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
