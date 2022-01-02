import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { SendmailComponent } from './components/sendmail/sendmail.component';
import { EmployeeDetailSpecificComponent } from './components/employee-detail-specific/employee-detail-specific.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    FooterComponent,
    EmployeeDetailComponent,
    HomeComponent,
    HeaderComponent,
    SendmailComponent,
    EmployeeDetailSpecificComponent,
    SearchEmployeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
